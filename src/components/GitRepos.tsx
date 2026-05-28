import React from "react"
import { FiArrowUpRight, FiGithub } from "react-icons/fi"

export type Repo = {
  node: {
    id: string
    url: string
    name: string
    description: string
  }
}

type GitReposProps = {
  repos: Repo[]
  user: string
}

// repo 番号を 2 桁ゼロ詰めで表示
const pad = (n: number) => String(n).padStart(2, "0")

const GitRepos: React.FC<GitReposProps> = ({ repos, user }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {repos.map((repo, idx) => {
        const { id, url, name, description } = repo.node
        return (
          <li
            key={id}
            className="animate-fade-up"
            style={{ animationDelay: `${idx * 70}ms` }}
          >
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full glass glass-hover rounded-sm p-6 sm:p-7"
            >
              {/* 上端ライン: 番号 + 矢印 */}
              <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-widest text-bone-500">
                <span>repo.{pad(idx + 1)}</span>
                <FiArrowUpRight
                  className="text-base text-neon-cyan opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </div>

              {/* repo 名 */}
              <h3 className="mt-8 font-display text-3xl leading-tight text-bone-50 break-words">
                {name}
              </h3>

              {/* 説明 */}
              {description && (
                <p className="mt-3 font-mono text-xs leading-relaxed text-bone-300 line-clamp-3">
                  {description}
                </p>
              )}

              {/* 下端の hairline */}
              <div className="mt-6 border-t border-dashed border-white/10 pt-3 font-mono text-[10px] uppercase tracking-widest text-bone-600 flex items-center gap-2">
                <FiGithub className="text-bone-500" aria-hidden />
                <span className="truncate">
                  github.com/{user}/{name}
                </span>
              </div>
            </a>
          </li>
        )
      })}

      {/* "Show More" カード */}
      <li
        className="animate-fade-up"
        style={{ animationDelay: `${repos.length * 70}ms` }}
      >
        <a
          href={`https://github.com/${user}`}
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-full min-h-[200px] flex-col items-start justify-between rounded-sm border border-dashed border-white/15 p-6 sm:p-7 transition-all duration-300 hover:border-neon-cyan/60 hover:bg-neon-cyan/[0.03]"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-bone-500">
            more
          </span>
          <div>
            <div className="font-display text-3xl text-bone-50 group-hover:text-neon-cyan transition-colors">
              See all
              <span className="block italic text-bone-500 text-xl mt-1">
                on github →
              </span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default GitRepos
