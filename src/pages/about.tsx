import React from "react"

import Layout from "../components/layout"
import { SEO } from "../components/SEO"

// キャリアタイムラインのデータ。順序は新しい順
type Career = {
  period: string
  role: string
  company: string
  href: string
  note?: string
  accent: "cyan" | "magenta" | "violet"
  current?: boolean
}

const CAREERS: Career[] = [
  {
    period: "2023 — now",
    role: "Server Side Engineer",
    company: "IRIAM Inc.",
    href: "https://www.live.iriam.com/company",
    note: "Live streaming platform for vtubers.",
    accent: "cyan",
    current: true,
  },
  {
    period: "2021 — 2023",
    role: "Infra Engineer / SRE",
    company: "DeNA Co., Ltd.",
    href: "https://dena.com/",
    note: "Cloud infrastructure & reliability engineering.",
    accent: "magenta",
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    company: "Hatena Co., Ltd.",
    href: "https://hatena.co.jp/",
    note: "Web services for publishers and readers.",
    accent: "violet",
  },
]

const ACCENT_DOT: Record<Career["accent"], string> = {
  cyan: "bg-neon-cyan shadow-neon-cyan",
  magenta: "bg-neon-magenta shadow-neon-magenta",
  violet: "bg-neon-violet shadow-neon-violet",
}

const ACCENT_TEXT: Record<Career["accent"], string> = {
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  violet: "text-neon-violet",
}

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO title="about / odmishien" />
      <Layout active="about">
        <div className="mx-auto max-w-5xl">
          {/* ページラベル */}
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-500">
            <span className="h-px w-6 bg-neon-cyan/60" />
            <span>chapter 01</span>
            <span className="text-bone-600">/ about</span>
          </div>

          {/* ヒーロー: バイオグラフィ */}
          <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-bone-50 text-glow-soft animate-fade-up">
                Engineer,
                <br />
                <span className="italic text-gradient-neon">always learning.</span>
              </h1>
              <p
                className="mt-8 max-w-xl font-mono text-sm sm:text-base leading-relaxed text-bone-300 animate-fade-up"
                style={{ animationDelay: "150ms" }}
              >
                Hi, I&apos;m Tetsuya — known online as{" "}
                <span className="text-bone-100">odmishien</span>. I build &amp;
                operate backend systems for products that need to stay up at
                scale. I care about reliability, observability, and writing code
                that the next person on call can actually read.
              </p>
            </div>

            {/* 右: メタ情報 (mono の表) */}
            <aside
              className="lg:col-span-5 glass rounded-sm p-6 sm:p-7 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-bone-500">
                profile / system info
              </div>
              <dl className="mt-5 space-y-3 font-mono text-sm">
                {[
                  ["alias", "@odmishien"],
                  ["role", "backend · sre"],
                  ["loc", "Tokyo, JP"],
                  ["status", "online"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 border-b border-dashed border-white/10 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-bone-600 uppercase tracking-widest text-[11px]">
                      {k}
                    </dt>
                    <dd className="text-bone-100">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </section>

          {/* キャリアタイムライン */}
          <section className="mt-20 sm:mt-28">
            <header className="flex items-end justify-between gap-4 flex-wrap">
              <h2 className="font-display text-4xl sm:text-5xl text-bone-50">
                Careers
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone-500">
                0{CAREERS.length} entries
              </span>
            </header>
            <div className="hairline mt-4" />

            {/* タイムライン本体 */}
            <ol className="mt-10 relative">
              {/* 縦線 */}
              <span
                className="absolute left-[7px] sm:left-2 top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan/40 via-white/10 to-neon-violet/30"
                aria-hidden
              />
              {CAREERS.map((c, idx) => (
                <li
                  key={c.company}
                  className="relative pl-8 sm:pl-12 pb-12 last:pb-0 animate-fade-up"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  {/* 接続点 */}
                  <span
                    className={`absolute left-0 top-2 h-4 w-4 rounded-full ring-4 ring-ink-900 ${ACCENT_DOT[c.accent]}`}
                    aria-hidden
                  />
                  {c.current && (
                    <span
                      className="absolute left-0 top-2 h-4 w-4 rounded-full bg-neon-cyan/40 animate-ping"
                      aria-hidden
                    />
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-bone-500">
                      <span className={ACCENT_TEXT[c.accent]}>●</span>{" "}
                      {c.period}
                      {c.current && (
                        <span className="ml-3 inline-flex items-center gap-1 text-neon-cyan">
                          <span className="h-1 w-1 rounded-full bg-neon-cyan animate-pulse-slow" />
                          current
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-bone-50">
                    {c.role}{" "}
                    <span className="text-bone-500">@</span>{" "}
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`link-underline ${ACCENT_TEXT[c.accent]}`}
                    >
                      {c.company}
                    </a>
                  </h3>
                  {c.note && (
                    <p className="mt-3 font-mono text-sm text-bone-300 max-w-2xl">
                      {c.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
