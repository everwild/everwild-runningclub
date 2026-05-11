import type { Lang } from "@/lib/lang";

export const signupValueLabels = {
      ja: {
        language: { ja: "日本語", en: "English", zh: "中文", bi: "複数言語でも可" },
        experience: {
          first: "ランニングクルー初参加",
          steady: "継続して走っている",
          training: "トレーニング目標がある",
          race: "レースに向けて準備中"
        },
        sessions: {
          tue_interval: "火曜 代々木 インターバル",
          thu_threshold: "木曜 皇居 LT走",
          fri_fun: "金曜 皇居 ファンラン",
          sat_lsd: "土曜 東京近郊 LSD",
          sat_newcomer: "土曜 皇居 はじめて参加ラン"
        },
        goals: {
          training: "トレーニング",
          health: "健康",
          race: "レース準備",
          social: "つながり"
        }
      },
      zh: {
        language: { ja: "日本語", zh: "中文", en: "English", bi: "中英都可以" },
        experience: {
          first: "第一次参加跑团",
          steady: "正在稳定跑步",
          training: "有训练目标",
          race: "正在备赛"
        },
        sessions: {
          tue_interval: "周二代代木间歇跑",
          thu_threshold: "周四皇居乳酸阈值跑",
          fri_fun: "周五皇居欢乐跑",
          sat_lsd: "周六东京周边 LSD",
          sat_newcomer: "周六皇居新人募集跑"
        },
        goals: {
          training: "训练",
          health: "健康",
          race: "备战",
          social: "社交"
        }
      },
      en: {
        language: { ja: "Japanese", zh: "Chinese", en: "English", bi: "Bilingual" },
        experience: {
          first: "First running crew session",
          steady: "Building consistency",
          training: "Training-focused",
          race: "Preparing for races"
        },
        sessions: {
          tue_interval: "Tuesday Yoyogi intervals",
          thu_threshold: "Thursday Imperial threshold",
          fri_fun: "Friday Imperial fun run",
          sat_lsd: "Saturday Tokyo-area LSD",
          sat_newcomer: "Saturday Imperial newcomer run"
        },
        goals: {
          training: "Training",
          health: "Health",
          race: "Race prep",
          social: "Social"
        }
      }
    } as const;
