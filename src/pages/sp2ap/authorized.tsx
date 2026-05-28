import React from "react"
import { FiCheck } from "react-icons/fi"

import Layout from "../../components/layout"
import { SEO } from "../../components/SEO"

const AuthorizedPage: React.FC = () => {
  return (
    <>
      <SEO title="authorized / sp2ap" />
      <Layout active="other">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-500">
            <span className="h-px w-6 bg-neon-cyan/60" />
            <span>sp2ap / oauth</span>
            <span className="text-bone-600">/ callback</span>
          </div>

          <section className="mt-16 sm:mt-24 text-center">
            {/* 巨大なチェック + リング */}
            <div className="relative inline-flex items-center justify-center">
              <span
                className="absolute -inset-6 rounded-full bg-neon-cyan/20 blur-2xl animate-pulse-slow"
                aria-hidden
              />
              <span
                className="absolute inset-0 rounded-full border border-neon-cyan/30 animate-ping"
                style={{ animationDuration: "2.4s" }}
                aria-hidden
              />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-neon-cyan/60 bg-ink-900 shadow-neon-cyan">
                <FiCheck className="text-5xl text-neon-cyan" />
              </div>
            </div>

            <h1
              className="mt-12 font-display text-[clamp(3rem,9vw,6rem)] leading-[0.95] tracking-tight text-bone-50 text-glow-soft animate-fade-up"
            >
              <span className="block">Authorized</span>
              <span className="block italic text-gradient-neon">
                — handshake complete
              </span>
            </h1>

            <p
              className="mt-8 mx-auto max-w-md font-mono text-sm leading-relaxed text-bone-300 animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              The OAuth callback for{" "}
              <code className="px-1.5 py-0.5 rounded bg-white/5 text-neon-cyan">
                sp2ap
              </code>{" "}
              succeeded. You may close this tab and return to the app.
            </p>

            {/* mono の終端表示 */}
            <div
              className="mt-12 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-bone-500 animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              status <span className="text-neon-cyan">200 ok</span>
              <span className="text-bone-700">·</span>
              token <span className="text-bone-100">stored</span>
              <span className="text-bone-700">·</span>
              <span className="text-neon-cyan animate-blink">_</span>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default AuthorizedPage
