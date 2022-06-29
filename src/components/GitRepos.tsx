import React from "react"
import { Row } from "react-bootstrap"

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

const GitRepos: React.FC<GitReposProps> = ({ repos, user }) => {
  const items = repos.map(repo => {
    const { id, url, name, description } = repo.node
    return (
      <li key={id}>
        <a href={url} target="_blank">
          {name}
        </a>
        <br />
        <span>{description}</span>
      </li>
    )
  })

  return (
    <Row className="my-4">
      <section id="github">
        <h2>Works</h2>
        <ul className="alt">{items}</ul>
        <ul className="actions">
          <li>
            <a
              href={`https://github.com/${user}`}
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

export default GitRepos
