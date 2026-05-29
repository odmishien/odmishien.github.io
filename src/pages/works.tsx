import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GitRepos from "../components/GitRepos"
import { SEO } from "../components/SEO"

interface WorksProps {
  data: any
}

const WorksPage: React.FC<WorksProps> = ({ data }) => {
  // GITHUB_API_TOKEN 未設定時は githubData が null になる (gatsby-node.js でスキーマだけ常に定義)
  const repos = data?.githubData?.data?.search?.edges ?? []

  return (
    <>
      <SEO title="works / odmishien" />
      <Layout active="works">
        <div className="mx-auto max-w-6xl">
          {/* ページラベル */}
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-500">
            <span className="h-px w-6 bg-neon-magenta/60" />
            <span>chapter 02</span>
            <span className="text-bone-600">/ works</span>
          </div>

          {/* ヒーロー */}
          <section className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-bone-50 text-glow-soft animate-fade-up">
                Open
                <br />
                <span className="italic text-gradient-neon">source works</span>
              </h1>
              <p
                className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-bone-300 animate-fade-up"
                style={{ animationDelay: "150ms" }}
              >
                Repositories tagged{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/5 text-neon-cyan">
                  portfolio
                </code>{" "}
                on GitHub. Sketches, side-projects and tools I publish in the
                open.
              </p>
            </div>

            <div
              className="font-mono text-xs uppercase tracking-widest text-bone-500 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div>
                <span className="text-bone-600">count</span>{" "}
                <span className="text-bone-100">
                  {String(repos.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <span className="text-bone-600">source</span>{" "}
                <span className="text-bone-100">github.com/odmishien</span>
              </div>
            </div>
          </section>

          <div className="hairline mt-10" />

          {/* グリッド */}
          <section className="mt-10">
            <GitRepos repos={repos as any} user="odmishien" />
          </section>
        </div>
      </Layout>
    </>
  )
}

export default WorksPage

// スキーマは gatsby-node.js で常に定義しているため、token の有無によらずクエリは通る
export const query = graphql`
  query Works {
    githubData {
      data {
        search {
          edges {
            node {
              id
              name
              description
              url
            }
          }
        }
      }
    }
  }
`
