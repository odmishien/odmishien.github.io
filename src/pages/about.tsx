import React from "react"
import { FiArrowUpRight } from "react-icons/fi"

import Layout from "../components/layout"
import { SEO } from "../components/SEO"

// キャリアタイムラインのデータ。順序は新しい順
type CareerLink = {
  label: string
  href: string
}

type Career = {
  period: string
  company: string
  companyHref: string
  department: string
  role: string
  note: string
  links?: CareerLink[]
  accent: "cyan" | "magenta" | "violet"
  current?: boolean
}

const CAREERS: Career[] = [
  {
    period: "2023 — now",
    company: "IRIAM inc.",
    companyHref: "https://www.live.iriam.com",
    department:
      "IRIAMプラットフォーム事業部 プロダクト開発部 エンジニアリング第一グループ",
    role: "エンジニアリングマネージャー",
    note: "新感覚VTuber配信アプリ「IRIAM」における機能開発チームのマネージャー。PdMやデザイナーと仮説に対して要求分析・要件定義から行い、その検証をアジャイルに進めていくチームの運営・マネジメント・開発を担当。自身も設計や実装を行うプレイングマネージャー。",
    links: [
      {
        label: "インタビュー記事",
        href: "https://fullswing.dena.com/archives/100143/",
      },
      {
        label: "podcast",
        href: "https://podcasts.apple.com/jp/podcast/134-%E8%87%AA%E5%88%86%E3%81%AE%E4%BA%BA%E7%94%9F%E3%81%AF%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%A7%E5%A4%89%E3%81%88%E3%82%89%E3%82%8C%E3%82%8B-%E3%81%A8%E7%9F%A5%E3%81%A3%E3%81%A6-%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%99-dena-%E3%81%8A%E3%81%A7%E3%82%93/id1653563200?i=1000734427012",
      },
    ],
    accent: "cyan",
    current: true,
  },
  {
    period: "2021 — 2023",
    company: "DeNA Co., Ltd.",
    companyHref: "https://dena.com/",
    department: "IT本部 IT基盤部",
    role: "インフラエンジニア / SRE",
    note: "ライブ配信サービスやその他エンタメサービスのインフラ基盤(AWSがメイン)の保守運用、改善業務を担当。コスト削減の提案・コンサルティングや、マルチプラットフォーム化に向けたR&Dなども行う。",
    links: [
      {
        label: "ブログ記事",
        href: "https://engineering.dena.com/blog/2022/07/aws-gameday/",
      },
    ],
    accent: "magenta",
  },
  {
    period: "2019 — 2021",
    company: "Hatena Co., Ltd.",
    companyHref: "https://hatena.co.jp/",
    department: "サービスプラットフォーム事業部",
    role: "ソフトウェアエンジニア",
    note: "社内サービス基盤や、メイン以外のプロダクト(社内ツールを含む)の開発・保守運用を担当。",
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

          {/* キャリアタイムライン */}
          <section className="mt-20 sm:mt-28">
            <header className="flex items-end justify-between gap-4 flex-wrap">
              <h2 className="font-display text-4xl sm:text-5xl text-bone-50">
                Careers
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone-500">
                0{CAREERS.length} careers
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
                  className="relative pl-8 sm:pl-12 pb-14 last:pb-0 animate-fade-up"
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

                  {/* 期間 + current バッジ */}
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

                  {/* 会社名 */}
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-bone-50">
                    <a
                      href={c.companyHref}
                      target="_blank"
                      rel="noreferrer"
                      className={`link-underline ${ACCENT_TEXT[c.accent]}`}
                    >
                      {c.company}
                    </a>
                  </h3>

                  {/* 部署 / 役職 */}
                  <div className="mt-3 font-mono text-xs sm:text-sm text-bone-300 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-bone-600 uppercase tracking-widest text-[10px] whitespace-nowrap">
                        dept
                      </span>
                      <span>{c.department}</span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-bone-600 uppercase tracking-widest text-[10px] whitespace-nowrap">
                        role
                      </span>
                      <span className="text-bone-100">{c.role}</span>
                    </div>
                  </div>

                  {/* 業務内容 */}
                  <p className="mt-4 font-mono text-sm leading-loose text-bone-300 max-w-2xl">
                    {c.note}
                  </p>

                  {/* 関連リンク */}
                  {c.links && c.links.length > 0 && (
                    <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
                      <li className="text-bone-600 uppercase tracking-widest text-[10px]">
                        links
                      </li>
                      {c.links.map(l => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`group inline-flex items-center gap-1 ${ACCENT_TEXT[c.accent]} hover:opacity-80 transition-opacity`}
                          >
                            <span className="link-underline">{l.label}</span>
                            <FiArrowUpRight
                              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              aria-hidden
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
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
