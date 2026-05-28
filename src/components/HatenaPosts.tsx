import React from "react"
import { FiArrowUpRight } from "react-icons/fi"

const moment = require("moment")

type Post = {
  node: {
    title: string
    link: string
    pubDate: string
  }
}

type HatenaPostsProps = {
  posts: Post[]
}

const pad = (n: number) => String(n).padStart(3, "0")

const HatenaPosts: React.FC<HatenaPostsProps> = ({ posts }) => {
  return (
    <ul className="divide-y divide-white/5 border-y border-white/5">
      {posts.map((post, idx) => {
        const { title, link, pubDate } = post.node
        const date = moment(pubDate, "ddd, DD MMM YYYY HH:mm:ss ZZ")
        const formatted = date.format("YYYY.MM.DD")
        const year = date.format("YYYY")

        return (
          <li
            key={`${link}-${idx}`}
            className="animate-fade-up"
            style={{ animationDelay: `${Math.min(idx, 12) * 40}ms` }}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-12 items-baseline gap-4 px-1 py-5 sm:py-6 transition-colors hover:bg-white/[0.02]"
            >
              {/* 番号 */}
              <span className="col-span-2 sm:col-span-1 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-600 group-hover:text-neon-magenta transition-colors">
                {pad(posts.length - idx)}
              </span>

              {/* 日付 */}
              <time
                className="col-span-10 sm:col-span-2 font-mono text-xs tracking-widest text-bone-500"
                dateTime={date.format()}
              >
                <span className="text-bone-100">{formatted}</span>
                <span className="ml-2 text-bone-600">{year}</span>
              </time>

              {/* タイトル */}
              <span className="col-span-11 sm:col-span-8 font-display text-lg sm:text-2xl leading-snug text-bone-100 group-hover:text-bone-50 transition-colors">
                <span className="link-underline">{title}</span>
              </span>

              {/* 矢印 */}
              <FiArrowUpRight
                className="col-span-1 justify-self-end text-base text-bone-600 transition-all duration-300 group-hover:text-neon-magenta group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </li>
        )
      })}

      {/* 末尾: 元ブログへのリンク */}
      <li className="py-6 flex justify-end">
        <a
          href="https://odmishien-tech.hatenablog.jp/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone-500 hover:text-neon-magenta transition-colors"
        >
          read all on hatena blog
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </li>
    </ul>
  )
}

export default HatenaPosts
