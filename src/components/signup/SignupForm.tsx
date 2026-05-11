"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import type { Lang } from "@/lib/lang";
import { FORMSPREE_ENDPOINT } from "@/lib/site";
import type { SignupMessages } from "@/messages/signupCopy";
import { signupCopy } from "@/messages/signupCopy";
import { signupValueLabels } from "@/messages/signupValueLabels";

function getCheckedValues(form: HTMLFormElement, name: string) {
  return Array.from(form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)).map((i) => i.value);
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function SignupForm({ lang }: { lang: Lang }) {
  const bundle = signupCopy[lang];
  const labels = signupValueLabels[lang];
  const [pacePh, setPacePh] = useState(bundle.pacePlaceholder);
  const [notesPh, setNotesPh] = useState(bundle.notesPlaceholder);
  const [status, setStatus] = useState<{ title: string; body: string; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setPacePh(bundle.pacePlaceholder);
    setNotesPh(bundle.notesPlaceholder);
  }, [bundle.pacePlaceholder, bundle.notesPlaceholder]);

  const homeHref = `/${lang}/`;

  const buildMessage = (form: HTMLFormElement) => {
    const sessions = getCheckedValues(form, "sessions");
    const goals = getCheckedValues(form, "goals");
    const fd = new FormData(form);
    const contactValue = (fd.get("contact")?.toString().trim() || bundle.messageUnknown) as string;

    const fields: ([string | null, string] | [null, string])[] = [
      [bundle.messageName, (fd.get("name")?.toString().trim() || bundle.messageUnknown) as string],
      [null, contactValue],
      [
        bundle.messageLanguage,
        labels.language[fd.get("language") as keyof typeof labels.language] || bundle.messageUnknown
      ],
      [
        bundle.messageExperience,
        labels.experience[fd.get("experience") as keyof typeof labels.experience] || bundle.messageUnknown
      ],
      [bundle.messagePace, (fd.get("pace")?.toString().trim() || bundle.messageUnknown) as string],
      [
        bundle.messageSessions,
        sessions.length ? sessions.map((v) => labels.sessions[v as keyof typeof labels.sessions]).join(" / ") : bundle.messageUnknown
      ],
      [
        bundle.messageGoals,
        goals.length ? goals.map((v) => labels.goals[v as keyof typeof labels.goals]).join(" / ") : bundle.messageUnknown
      ],
      [bundle.messageNotes, (fd.get("notes")?.toString().trim() || bundle.messageUnknown) as string]
    ];

    return [
      bundle.messageGreeting,
      "",
      ...fields.map(([label, value]) => (label ? `${label}: ${value}` : `${value}`)),
      "",
      bundle.messageClosing
    ].join("\n");
  };

  const submitToFormspree = async (form: HTMLFormElement, message: string, sessions: string[], goals: string[]) => {
    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const contact = (fd.get("contact") || "").toString().trim();
    const out = new FormData();
    out.append("name", name);
    out.append("contact", contact);
    if (looksLikeEmail(contact)) {
      out.append("_replyto", contact);
    }
    out.append(
      "language",
      labels.language[fd.get("language") as keyof typeof labels.language] || (fd.get("language") || "").toString()
    );
    out.append(
      "experience",
      labels.experience[fd.get("experience") as keyof typeof labels.experience] ||
        (fd.get("experience") || "").toString()
    );
    out.append("pace", (fd.get("pace") || "").toString().trim());
    out.append(
      "sessions",
      sessions.map((v) => labels.sessions[v as keyof typeof labels.sessions]).join("; ")
    );
    out.append("goals", goals.map((v) => labels.goals[v as keyof typeof labels.goals]).join("; "));
    out.append("notes", (fd.get("notes") || "").toString().trim());
    out.append("message", message);
    out.append("_subject", "Everwild Running Club — Signup");
    const gotcha = form.querySelector<HTMLInputElement>('input[name="_gotcha"]');
    if (gotcha) {
      out.append("_gotcha", (gotcha.value || "").toString());
    }
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: out,
      headers: { Accept: "application/json" }
    });
    return response.ok;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (submitting) {
      return;
    }
    const sessions = getCheckedValues(form, "sessions");
    const goals = getCheckedValues(form, "goals");
    const consent = form.querySelector<HTMLInputElement>("#consent")?.checked;

    if (!sessions.length) {
      setStatus({ title: bundle.validationTitle, body: bundle.errorSessions, message: "" });
      return;
    }
    if (!consent) {
      setStatus({ title: bundle.validationTitle, body: bundle.errorConsent, message: "" });
      return;
    }

    setSubmitting(true);
    const message = buildMessage(form);
    let ok = false;
    try {
      ok = await submitToFormspree(form, message, sessions, goals);
    } catch {
      ok = false;
    }
    if (ok) {
      setStatus({ title: bundle.successTitle, body: bundle.successBody, message: "" });
    } else {
      setStatus({ title: bundle.formspreeFailTitle, body: bundle.formspreeWarning, message });
    }
    setSubmitting(false);
  };

  const hasMessage = Boolean(status?.message);

  return (
    <>
      <form id="signup-form" onSubmit={onSubmit}>
        <input type="text" name="_gotcha" className="signup-honeypot" tabIndex={-1} autoComplete="off" aria-hidden />
        <div className="field-grid">
          <div className="field">
            <label className="is-required" htmlFor="name">
              {bundle.labelName}
            </label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="field">
            <label className="is-required" htmlFor="contact">
              {bundle.labelContact}
            </label>
            <input id="contact" name="contact" type="text" required />
          </div>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="language">{bundle.labelLanguage}</label>
            <select id="language" name="language" defaultValue="ja">
              <option value="ja">{bundle.optionJa}</option>
              <option value="en">{bundle.optionEn}</option>
              <option value="zh">{bundle.optionZh}</option>
              <option value="bi">{bundle.optionBi}</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="experience">{bundle.labelExperience}</label>
            <select id="experience" name="experience" defaultValue="first">
              <option value="first">{bundle.expFirst}</option>
              <option value="steady">{bundle.expSteady}</option>
              <option value="training">{bundle.expTraining}</option>
              <option value="race">{bundle.expRace}</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="pace">{bundle.labelPace}</label>
          <input id="pace" name="pace" type="text" placeholder={pacePh} />
          <span className="field-hint">{bundle.paceHint}</span>
        </div>
        <div className="choice-group">
          <div className="choice-title is-required">{bundle.labelSessions}</div>
          <div className="choice-grid">
            <label className="choice">
              <input type="checkbox" name="sessions" value="tue_interval" />
              <span>{bundle.sessionTue}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="sessions" value="thu_threshold" />
              <span>{bundle.sessionThu}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="sessions" value="fri_fun" />
              <span>{bundle.sessionFri}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="sessions" value="sat_lsd" />
              <span>{bundle.sessionSatLsd}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="sessions" value="sat_newcomer" />
              <span>{bundle.sessionSatNew}</span>
            </label>
          </div>
        </div>
        <div className="choice-group">
          <div className="choice-title">{bundle.labelGoals}</div>
          <div className="choice-grid">
            <label className="choice">
              <input type="checkbox" name="goals" value="training" />
              <span>{bundle.goalTraining}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="goals" value="health" />
              <span>{bundle.goalHealth}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="goals" value="race" />
              <span>{bundle.goalRace}</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="goals" value="social" />
              <span>{bundle.goalSocial}</span>
            </label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="notes">{bundle.labelNotes}</label>
          <textarea id="notes" name="notes" placeholder={notesPh} />
          <span className="field-hint">{bundle.notesHint}</span>
        </div>
        <label className="consent">
          <input id="consent" name="consent" type="checkbox" required />
          <span className="is-required">{bundle.consentText}</span>
        </label>
        <button className="button button-primary" type="submit" disabled={submitting}>
          {bundle.submitLabel}
        </button>
      </form>

      <section
        id="status"
        className={`status${status ? " is-visible" : ""}`}
        aria-live="polite"
        hidden={!status}
      >
        {status ? (
          <>
            <strong id="status-title">{status.title}</strong>
            <p id="status-copy">{status.body}</p>
            <textarea
              id="output"
              className="output-box"
              readOnly
              aria-label="Signup summary"
              value={status.message}
              hidden={!hasMessage}
              style={{ display: hasMessage ? "block" : "none" }}
            />
            <div className="helper-row">
              <Link className="button button-primary" href={homeHref}>
                {bundle.statusHome}
              </Link>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
