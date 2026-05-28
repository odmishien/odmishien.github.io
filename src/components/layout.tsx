import React from "react"
import Helmet from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./layout.css"

type LayoutProps = {
  children: React.ReactNode
  // ナビゲーションのアクティブセクション (小さなインジケーターで使用)
  active?: "home" | "about" | "works" | "posts" | "other"
}

// 共通の固定ナビ。モノスペースで観測室のコントロールパネル風
const NAV_ITEMS: Array<{
  to: string
  label: string
  code: string
  active: LayoutProps["active"]
}> = [
  { to: "/", label: "index", code: "00", active: "home" },
  { to: "/about", label: "about", code: "01", active: "about" },
  { to: "/works", label: "works", code: "02", active: "works" },
  { to: "/posts", label: "posts", code: "03", active: "posts" },
]

const Layout: React.FC<LayoutProps> = ({ children, active = "other" }) => {
  return (
    <>
      <Helmet>
        {/* Cyber Observatory フォント: serif の Instrument Serif + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
        />
      </Helmet>

      <div className="cyber-bg relative min-h-screen text-bone-50">
        {/* 走査線とグレイン */}
        <div className="cyber-scanline" aria-hidden />
        <div className="cyber-grain" aria-hidden />

        {/* 四隅のコーナーマーク */}
        <span className="corner-mark tl" aria-hidden />
        <span className="corner-mark tr" aria-hidden />
        <span className="corner-mark bl" aria-hidden />
        <span className="corner-mark br" aria-hidden />

        {/* ヘッダー: 左上にシステム ID、右上にナビゲーション */}
        <header className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-12">
          <div className="flex items-start justify-between gap-6">
            {/* 左: システム ID */}
            <div className="font-mono text-[10px] sm:text-xs tracking-widest text-bone-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse-slow" />
                <span>node.odmishien</span>
              </div>
              <div className="mt-1 text-bone-600">obs / v4.0 / online</div>
            </div>

            {/* 右: ナビゲーション */}
            <nav
              className="font-mono text-xs tracking-widest"
              aria-label="primary"
            >
              <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 uppercase">
                {NAV_ITEMS.map(item => {
                  const isActive = active === item.active
                  return (
                    <li key={item.to}>
                      <AniLink
                        fade
                        to={item.to}
                        className={`group inline-flex items-center gap-2 transition-colors ${
                          isActive
                            ? "text-neon-cyan"
                            : "text-bone-300 hover:text-bone-50"
                        }`}
                      >
                        <span className="text-bone-600 group-hover:text-neon-cyan transition-colors">
                          {item.code}
                        </span>
                        <span className="link-underline">{item.label}</span>
                      </AniLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* ヘッダー下の hairline */}
          <div className="hairline mt-6" />
        </header>

        {/* メインコンテンツ */}
        <main className="relative z-10 px-6 sm:px-10 py-12 sm:py-16">
          {children}
        </main>

        {/* フッター: モノスペースで status bar 風 */}
        <footer className="relative z-10 px-6 sm:px-10 pb-8 pt-4">
          <div className="hairline mb-5" />
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] sm:text-xs tracking-widest text-bone-600 uppercase">
            <div className="flex items-center gap-4">
              <span>
                <span className="text-bone-500">lat</span> 35.6762
              </span>
              <span>
                <span className="text-bone-500">lon</span> 139.6503
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>© odmishien</span>
              <span className="hidden sm:inline">
                signal{" "}
                <span className="text-neon-cyan animate-blink">_</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
