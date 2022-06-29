import React from "react"
import { graphql } from "gatsby"
import { WorksQuery } from "../../types/graphql-types"
import GitRepos from "../components/GitRepos"
import { Container } from "react-bootstrap"
import Header from "../components/Header"

interface WorksProps {
  data: WorksQuery
}

const WorksPage: React.FC<WorksProps> = ({ data }) => {
  const repos = data.githubData?.data?.search?.edges
  return (
    <Container>
      <Header></Header>
      <GitRepos repos={repos} user="odmishien"></GitRepos>
    </Container>
  )
}
export default WorksPage

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
