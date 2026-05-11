import type { CSSProperties } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/lang";
import type { HomeMessages } from "@/messages/homeCopy";

function Html({ className, html }: { className?: string; html: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function HomeMain({ lang, t }: { lang: Lang; t: HomeMessages }) {
  const base = `/${lang}`;
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-media" data-hero-carousel aria-hidden="true">
          <div className="hero-media-frame">
            <div className="hero-media-track">
              {[1, 2, 3, 4, 5].map((n, i) => (
                <figure key={n} className={`hero-slide${i === 0 ? " is-active" : ""}`}>
                  <img
                    src={`/assets/images/hero/hero-${n}.webp`}
                    alt=""
                    loading={i < 2 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "low"}
                    decoding="async"
                    width={2560}
                    height={1440}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <h1>
              <Html html={t.heroTitle} />
            </h1>
            <p>{t.heroBody}</p>
          </div>
        </div>
      </section>

      <section id="manifesto">
        <div className="shell">
          <div className="section-intro" data-reveal>
            <div>
              <span className="section-kicker">{t.manifestoKicker}</span>
              <h2 className="section-title-lockup">
                <Html html={t.manifestoTitle} />
              </h2>
            </div>
            <p className="manifesto-intro-note">
              <Html html={t.manifestoClosing} />
            </p>
          </div>

          <div className="manifesto-grid">
            <div className="manifesto-card-grid">
              <article className="manifesto-card" data-reveal>
                <h3>{t.manifestoCardTitleOne}</h3>
                <p>{t.manifestoCardBodyOne}</p>
              </article>
              <article className="manifesto-card" data-reveal>
                <h3>{t.manifestoCardTitleTwo}</h3>
                <p>{t.manifestoCardBodyTwo}</p>
              </article>
            </div>

            <div className="manifesto-gallery" data-reveal>
              <div className="manifesto-carousel" data-manifesto-carousel>
                <div className="manifesto-carousel-frame">
                  <div className="manifesto-carousel-track">
                    <figure
                      className="manifesto-slide is-active"
                      style={{ "--slide-ratio": "2 / 3" } as CSSProperties}
                    >
                      <img src="/assets/images/about/about-1.webp" alt="" loading="lazy" width={1201} height={1800} />
                    </figure>
                    <figure className="manifesto-slide" style={{ "--slide-ratio": "2 / 3" } as CSSProperties}>
                      <img src="/assets/images/about/about-2.webp" alt="" loading="lazy" width={1201} height={1800} />
                    </figure>
                    <figure className="manifesto-slide" style={{ "--slide-ratio": "2 / 3" } as CSSProperties}>
                      <img src="/assets/images/about/about-3.webp" alt="" loading="lazy" width={1201} height={1800} />
                    </figure>
                    <figure className="manifesto-slide" style={{ "--slide-ratio": "2 / 3" } as CSSProperties}>
                      <img src="/assets/images/about/about-4.webp" alt="" loading="lazy" width={1200} height={1800} />
                    </figure>
                    <figure className="manifesto-slide" style={{ "--slide-ratio": "3 / 2" } as CSSProperties}>
                      <img src="/assets/images/about/about-5.webp" alt="" loading="lazy" width={2000} height={1333} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="shell">
          <div className="section-intro" data-reveal>
            <div>
              <span className="section-kicker">{t.scheduleKicker}</span>
              <h2 className="section-title-lockup">
                <Html html={t.scheduleTitle} />
              </h2>
            </div>
            <p>{t.scheduleBody}</p>
          </div>

          <div className="schedule-grid">
            <article className="schedule-item is-dark" data-reveal>
              <div className="schedule-card">
                <div className="schedule-visual">
                  <img src="/assets/images/runs/interval-run.jpg" alt="" loading="lazy" width={540} height={801} />
                </div>
              </div>
              <div className="schedule-copy">
                <h3>
                  <Html html={t.scheduleCardTitleOne} />
                </h3>
                <p>{t.scheduleCardBodyOne}</p>
                <div className="schedule-meta">
                  <span className="schedule-day-tag">{t.scheduleDayOne}</span>
                  <span>{t.scheduleMetaOneA}</span>
                  <span>{t.scheduleMetaOneB}</span>
                </div>
              </div>
            </article>

            <article className="schedule-item" data-reveal>
              <div className="schedule-card">
                <div className="schedule-visual">
                  <img src="/assets/images/runs/threshold-run.jpg" alt="" loading="lazy" width={540} height={801} />
                </div>
              </div>
              <div className="schedule-copy">
                <h3>
                  <Html html={t.scheduleCardTitleTwo} />
                </h3>
                <p>{t.scheduleCardBodyTwo}</p>
                <div className="schedule-meta">
                  <span className="schedule-day-tag">{t.scheduleDayTwo}</span>
                  <span>{t.scheduleMetaTwoA}</span>
                  <span>{t.scheduleMetaTwoB}</span>
                </div>
              </div>
            </article>

            <article className="schedule-item" data-reveal>
              <div className="schedule-card">
                <div className="schedule-visual">
                  <img src="/assets/images/runs/social-run.jpg" alt="" loading="lazy" width={540} height={801} />
                </div>
              </div>
              <div className="schedule-copy">
                <h3>
                  <Html html={t.scheduleCardTitleThree} />
                </h3>
                <p>{t.scheduleCardBodyThree}</p>
                <div className="schedule-meta">
                  <span className="schedule-day-tag">{t.scheduleDayThree}</span>
                  <span>{t.scheduleMetaThreeA}</span>
                  <span>{t.scheduleMetaThreeB}</span>
                </div>
              </div>
            </article>

            <article className="schedule-item is-dark" data-reveal>
              <div className="schedule-card">
                <div className="schedule-visual">
                  <img src="/assets/images/runs/lsd-run.jpg" alt="" loading="lazy" width={540} height={801} />
                </div>
              </div>
              <div className="schedule-copy">
                <h3>
                  <Html html={t.scheduleCardTitleFour} />
                </h3>
                <p>{t.scheduleCardBodyFour}</p>
                <div className="schedule-meta">
                  <span className="schedule-day-tag">{t.scheduleDayFour}</span>
                  <span>{t.scheduleMetaFourA}</span>
                  <span>{t.scheduleMetaFourB}</span>
                </div>
              </div>
            </article>

            <article className="schedule-item" data-reveal>
              <div className="schedule-card">
                <div className="schedule-visual">
                  <img src="/assets/images/runs/beginner-run.jpg" alt="" loading="lazy" width={540} height={801} />
                </div>
              </div>
              <div className="schedule-copy">
                <h3>
                  <Html html={t.scheduleCardTitleFive} />
                </h3>
                <p>{t.scheduleCardBodyFive}</p>
                <div className="schedule-meta">
                  <span className="schedule-day-tag">{t.scheduleDayFive}</span>
                  <span>{t.scheduleMetaFiveA}</span>
                  <span>{t.scheduleMetaFiveB}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="route-section" id="routes">
        <div className="shell">
          <div className="section-intro" data-reveal>
            <div>
              <span className="section-kicker">{t.routesKicker}</span>
              <h2 className="section-title-lockup">
                <Html html={t.routesTitle} />
              </h2>
            </div>
            <p>{t.routesBody}</p>
          </div>

          <div className="route-grid">
            <article className="route-card route-card--imperial" data-reveal>
              <span className="route-label">{t.routeLabelOne}</span>
              <h3>
                <Html html={t.routeTitleOne} />
              </h3>
              <p>{t.routeBodyOne}</p>
            </article>
            <article className="route-card route-card--yoyogi" data-reveal>
              <span className="route-label">{t.routeLabelTwo}</span>
              <h3>
                <Html html={t.routeTitleTwo} />
              </h3>
              <p>{t.routeBodyTwo}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pacer-section" id="pacers">
        <div className="shell">
          <div className="section-intro" data-reveal>
            <div>
              <span className="section-kicker">{t.pacersKicker}</span>
              <h2>
                <Html html={t.pacersTitle} />
              </h2>
            </div>
            <p>{t.pacersBody}</p>
          </div>

          <div className="pacer-grid">
            <article className="pacer-card" data-reveal>
              <h3>
                <Html html={t.pacerTitleOne} />
              </h3>
              <p>{t.pacerBodyOne}</p>
              <div className="pacer-tags">
                <span>{t.pacerTagOneA}</span>
                <span>{t.pacerTagOneB}</span>
                <span>{t.pacerTagOneC}</span>
              </div>
            </article>
            <article className="pacer-card" data-reveal>
              <h3>
                <Html html={t.pacerTitleTwo} />
              </h3>
              <p>{t.pacerBodyTwo}</p>
              <div className="pacer-tags">
                <span>{t.pacerTagTwoA}</span>
                <span>{t.pacerTagTwoB}</span>
                <span>{t.pacerTagTwoC}</span>
              </div>
            </article>
            <article className="pacer-card" data-reveal>
              <h3>
                <Html html={t.pacerTitleThree} />
              </h3>
              <p>{t.pacerBodyThree}</p>
              <div className="pacer-tags">
                <span>{t.pacerTagThreeA}</span>
                <span>{t.pacerTagThreeB}</span>
                <span>{t.pacerTagThreeC}</span>
              </div>
            </article>
            <article className="pacer-card" data-reveal>
              <h3>
                <Html html={t.pacerTitleFour} />
              </h3>
              <p>{t.pacerBodyFour}</p>
              <div className="pacer-tags">
                <span>{t.pacerTagFourA}</span>
                <span>{t.pacerTagFourB}</span>
                <span>{t.pacerTagFourC}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="shell">
          <div className="contact-stage" data-reveal>
            <span className="section-kicker contact-kicker">{t.joinKicker}</span>
            <div className="contact-icons">
              <a
                className="contact-icon contact-icon--xhs"
                href="https://www.xiaohongshu.com/user/profile/6888df4600000000280300a7"
                target="_blank"
                rel="noreferrer"
                aria-label="Xiaohongshu"
              />
              <a
                className="contact-icon contact-icon--ins"
                href="https://www.instagram.com/everwildrunningclub"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              />
              <a
                className="contact-icon contact-icon--threads"
                href="https://www.threads.com/@everwildrunningclub"
                target="_blank"
                rel="noreferrer"
                aria-label="Threads"
              />
              <a
                className="contact-icon contact-icon--tiktok"
                href="https://www.tiktok.com/@everwildrunningclub"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              />
              <span className="contact-icon contact-icon--x" aria-label="X" />
              <a
                className="contact-icon contact-icon--youtube"
                href="https://youtube.com/@everwildrunningclub"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="brands-section" id="shop">
        <div className="shell">
          <div className="brands-stage">
            <span className="section-kicker brands-kicker" data-reveal>
              {t.shopKicker}
            </span>
            <div className="brand-network brand-network--shop">
              <div className="brand-node brand-node--gear brand-node--shop" data-reveal>
                <div className="brand-visual">
                  <img
                    src="/assets/images/logo/everwild-gear-horizontal-white.png"
                    alt="EVERWILD G.E.A.R. logo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-section" id="signup">
        <div className="shell">
          <div className="signup-card" data-reveal>
            <div className="signup-card-copy">
              <span className="section-kicker signup-card-kicker">{t.signupKicker}</span>
              <h2 className="signup-title">
                <Html html={t.signupTitle} />
              </h2>
              <p>{t.signupBody}</p>
            </div>
            <div className="signup-actions signup-card-actions">
              <Link className="button button-secondary" href={`${base}#schedule`}>
                {t.signupBrowse}
              </Link>
              <Link className="button button-primary" href={`${base}/signup/`}>
                {t.signupPrimary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section" id="partners">
        <div className="shell">
          <div className="partners-stage">
            <span className="section-kicker partners-kicker" data-reveal>
              {t.partnersKicker}
            </span>
            <div className="partner-network">
              <a
                className="partner-link"
                href="https://www.nedao.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="NEDAO"
                data-reveal
              >
                <img src="/assets/images/logo/nedao.avif" alt="NEDAO logo" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="brands-section" id="brands">
        <div className="shell">
          <div className="brands-stage">
            <span className="section-kicker brands-kicker" data-reveal>
              {t.brandsKicker}
            </span>
            <div className="brand-network">
              <div className="brand-node brand-node--core" data-reveal>
                <div className="brand-visual">
                  <img src="/assets/images/logo/everwild-horizontal-white.png" alt="EVERWILD logo" loading="lazy" />
                </div>
              </div>
              <span className="brand-divider" aria-hidden />
              <div className="brand-node brand-node--gear" data-reveal>
                <div className="brand-visual">
                  <img
                    src="/assets/images/logo/everwild-gear-horizontal-white.png"
                    alt="EVERWILD G.E.A.R. logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="brand-divider" aria-hidden />
              <div className="brand-node brand-node--club" data-reveal>
                <div className="brand-visual">
                  <img src="/assets/images/logo/ERC-white.png" alt="EVERWILD Running Club logo" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
