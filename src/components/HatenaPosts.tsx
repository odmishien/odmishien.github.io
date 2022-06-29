import React from "react"
import { Row } from "react-bootstrap"

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

const HatenaPosts: React.FC<HatenaPostsProps> = ({ posts }) => {
  const items = posts.map(post => {
    const { title, link, pubDate } = post.node
    const formatPubDate = moment(
      pubDate,
      "ddd, DD MMM YYYY HH:mm:ss ZZ"
    ).format("YYYY-MM-DD")
    return (
      <li>
        <a href={link} target="_blank">
          {title} - {formatPubDate}
        </a>
      </li>
    )
  })

  return (
    <Row className="my-4">
      <section id="blog">
        <h2>Posts</h2>
        <ul>
          {items}
          <li>
            <a
              href={`https://tech.odmishien.fun`}
              target="_blank"
              className="button"
            >
              Show More Items
            </a>
          </li>
        </ul>
      </section>
    </Row>
  )
}

export default HatenaPosts
