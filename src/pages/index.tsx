import React from "react"
import { graphql } from "gatsby"

import { Container, Row } from "react-bootstrap"

import Icon from "../components/Icon"
import GitRepos from "../components/GitRepos"
import HatenaPosts from "../components/HatenaPosts"
import Layout from "../components/layout"
import { IndexQuery } from "../../types/graphql-types"
import { FiTwitter, FiGithub, FiInstagram, FiPenTool } from "react-icons/fi"

interface IndexProps {
  data: IndexQuery
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  const posts = data.allFeedHatenaBlogPosts.edges
  const repos = data.allGithubData.edges[0].node.data.allGithubData.edges
  return (
    <Layout>
      <Container>
        <Row className="mb-4">
          <h1 className="mr-4">odmishien</h1>
          <a className="mr-2" href="https://twitter.com/odmishien">
            <h1>
              <FiTwitter />
            </h1>
          </a>
          <a className="mr-2" href="https://github.com/odmishien">
            <h1>
              <FiGithub />
            </h1>
          </a>
          <a className="mr-2" href="https://instagram.com/odmishien">
            <h1>
              <FiInstagram />
            </h1>
          </a>
          <a className="mr-2" href="https://blog.odmishien.fun">
            <h1>
              <FiPenTool />
            </h1>
          </a>
        </Row>
        <Icon></Icon>
        <GitRepos repos={repos} user="odmishien"></GitRepos>
        <HatenaPosts posts={posts}></HatenaPosts>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Index {
    allGithubData {
      edges {
        node {
          data {
            allGithubData {
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
    }
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
