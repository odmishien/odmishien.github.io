import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HatenaPosts from "../components/HatenaPosts"
import { SEO } from "../components/SEO"
import { PostsQuery } from "../../types/graphql-types"

interface PostsProps {
  data: PostsQuery
}

const PostsPage: React.FC<PostsProps> = ({ data }) => {
  const posts = data.allFeedHatenaBlogPosts.edges

  return (
    <>
      <SEO title="posts / odmishien" />
      <Layout active="posts">
        <div className="mx-auto max-w-5xl">
          {/* ページラベル */}
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone-500">
            <span className="h-px w-6 bg-neon-violet/60" />
            <span>chapter 03</span>
            <span className="text-bone-600">/ posts</span>
          </div>

          {/* ヒーロー */}
          <section className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-bone-50 text-glow-soft animate-fade-up">
                Field
                <br />
                <span className="italic text-gradient-neon">notes</span>
              </h1>
              <p
                className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-bone-300 animate-fade-up"
                style={{ animationDelay: "150ms" }}
              >
                Long-form writings from{" "}
                <a
                  href="https://odmishien-tech.hatenablog.jp/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-neon-magenta"
                >
                  odmishien-tech.hatenablog.jp
                </a>
                . Pulled live from RSS.
              </p>
            </div>

            <div
              className="font-mono text-xs uppercase tracking-widest text-bone-500 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div>
                <span className="text-bone-600">total</span>{" "}
                <span className="text-bone-100">
                  {String(posts.length).padStart(3, "0")}
                </span>
              </div>
              <div>
                <span className="text-bone-600">feed</span>{" "}
                <span className="text-bone-100">hatena.rss</span>
              </div>
            </div>
          </section>

          <div className="hairline mt-10" />

          {/* リスト */}
          <section className="mt-6">
            <HatenaPosts posts={posts as any} />
          </section>
        </div>
      </Layout>
    </>
  )
}

export default PostsPage

export const query = graphql`
  query Posts {
    allFeedHatenaBlogPosts {
      edges {
        node {
          title
          link
          pubDate
        }
      }
    }
  }
`
