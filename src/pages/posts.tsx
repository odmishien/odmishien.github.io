import React from "react"
import { graphql } from "gatsby"
import HatenaPosts from "../components/HatenaPosts"
import { PostsQuery } from "../../types/graphql-types"
import { Container } from "react-bootstrap"
import Header from "../components/Header"

interface PostsProps {
  data: PostsQuery
}

const PostsPage: React.FC<PostsProps> = ({ data }) => {
  const posts = data.allFeedHatenaBlogPosts.edges
  return (
    <Container>
      <Header></Header>
      <HatenaPosts posts={posts}></HatenaPosts>
    </Container>
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
