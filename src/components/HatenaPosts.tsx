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
      <tr>
        <td>
          <a href={link}>{title}</a>
        </td>
        <td>
          <span> {formatPubDate}</span>
        </td>
      </tr>
    )
  })

  return (
    <Row className="mb-4">
      <section id="blog">
        <h2>Blogs</h2>
        <table className="alt">
          <td>Title</td>
          <td>PubDate</td>
          {items}
          <tr>
            <a href={`https://tech.odmishien.fun`} className="button">
              Show More Items
            </a>
          </tr>
        </table>
      </section>
    </Row>
  )
}

export default HatenaPosts
