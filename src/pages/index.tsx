import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiTwitter, FiGithub, FiPenTool, FiArrowUpRight } from "react-icons/fi"

import Layout from "../components/layout"
import Icon from "../components/Icon"
import { SEO } from "../components/SEO"

// トップページに置く 3 つのセクション入り口
const ENTRIES: Array<{
  to: string
  code: string
  title: string
  caption: string
  accent: "cyan" | "magenta" | "violet"
}> = [
  {
    to: "/about",
    code: "01",
    title: "About",
    caption: "career, role & where i build",
    accent: "cyan",
  },
  {
    to: "/works",
    code: "02",
    title: "Works",
    caption: "open source repositories",
    accent: "magenta",
  },
  {
    to: "/posts",
    code: "03",
    title: "Posts",
    caption: "writings on infra & engineering",
    accent: "violet",
  },
]

// アクセントカラー → クラスマップ
const ACCENT_TEXT: Record<string, string> = {
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  violet: "text-neon-violet",
}
const ACCENT_HOVER: Record<string, string> = {
  cyan: "glass-hover",
  magenta: "glass-hover-magenta",
  violet: "glass-hover",
}

const SOCIALS = [
  { href: "https://twitter.com/odmishien", label: "x / twitter", Icon: FiTwitter },
  { href: "https://github.com/odmishien", label: "github", Icon: FiGithub },
  {
    href: "https://odmishien.hatenablog.jp/",
    label: "hatena blog",
    Icon: FiPenTool,
  },
]

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="odmishien" keywords={[`odmishien`, `engineer`, `portfolio`]} />
      <Layout active="home">
        <div className="mx-auto max-w-6xl">
          {/* メタライン: 上部の小さなキャプション */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-500 animate-fade-in">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-neon-cyan/60" />
              ch.01 — portfolio
            </span>
            <span className="text-bone-600">/</span>
            <span>last synced · 2026</span>
          </div>

          {/* ヒーロー: アイコン + 大きな serif lockup */}
          <section className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* 左: アイコンと小キャプション */}
            <div className="lg:col-span-4 order-2 lg:order-1 animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative inline-block">
                {/* アイコン外周のグロー */}
                <div className="absolute -inset-3 rounded-full bg-neon-cyan/20 blur-2xl" aria-hidden />
                <div className="relative rounded-full overflow-hidden border border-white/10 ring-1 ring-neon-cyan/30">
                  <Icon />
                </div>
              </div>
              <div className="mt-6 font-mono text-xs uppercase tracking-widest text-bone-500 space-y-1">
                <div>
                  <span className="text-bone-600">handle</span>{" "}
                  <span className="text-bone-100">@odmishien</span>
                </div>
                <div>
                  <span className="text-bone-600">based</span>{" "}
                  <span className="text-bone-100">Tokyo, JP</span>
                </div>
              </div>
            </div>

            {/* 右: 名前ロックアップ */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <h1 className="font-display leading-[0.92] tracking-tight text-[clamp(3.5rem,11vw,9rem)] animate-fade-up">
                <span className="block text-bone-50 text-glow-soft">
                  odmishien
                </span>
                <span className="block text-gradient-neon italic">
                  &mdash; observatory
                </span>
              </h1>

              <p
                className="mt-8 max-w-xl font-mono text-sm sm:text-base leading-relaxed text-bone-300 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                Backend & SRE engineer building reliable, observable systems.
                <br className="hidden sm:block" />
                Currently at{" "}
                <a
                  href="https://www.live.iriam.com/company"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-neon-cyan"
                >
                  IRIAM Inc.
                </a>
                — previously Hatena & DeNA.
              </p>
            </div>
          </section>

          {/* セクションカード */}
          <section
            className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
            aria-label="sections"
          >
            {ENTRIES.map((entry, idx) => (
              <AniLink
                key={entry.to}
                fade
                to={entry.to}
                className={`group relative block glass ${ACCENT_HOVER[entry.accent]} p-6 sm:p-7 rounded-sm animate-fade-up`}
                style={{ animationDelay: `${280 + idx * 90}ms` }}
              >
                {/* 番号 */}
                <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-widest text-bone-500">
                  <span>sec.{entry.code}</span>
                  <FiArrowUpRight
                    className={`text-base ${ACCENT_TEXT[entry.accent]} opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                    aria-hidden
                  />
                </div>

                {/* タイトル */}
                <div className="mt-10 sm:mt-14">
                  <h2 className="font-display text-5xl sm:text-6xl leading-none text-bone-50">
                    {entry.title}
                  </h2>
                  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-bone-500">
                    {entry.caption}
                  </p>
                </div>

                {/* 下端のグローライン */}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${ACCENT_TEXT[entry.accent]}`}
                  aria-hidden
                />
              </AniLink>
            ))}
          </section>

          {/* ソーシャル */}
          <section
            className="mt-16 sm:mt-20 flex flex-wrap items-center justify-between gap-6 animate-fade-up"
            style={{ animationDelay: "560ms" }}
            aria-label="elsewhere"
          >
            <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-500">
              ── elsewhere
            </div>
            <ul className="flex items-center gap-2 sm:gap-3">
              {SOCIALS.map(({ href, label, Icon: SocialIcon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-bone-300 transition-all duration-300 hover:text-neon-cyan hover:border-neon-cyan/60 hover:shadow-neon-cyan hover:-translate-y-0.5"
                  >
                    <SocialIcon className="text-lg" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
