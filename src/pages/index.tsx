import React from "react"

import { Container } from "react-bootstrap"

import Icon from "../components/Icon"
import Layout from "../components/layout"
import { FiTwitter, FiGithub, FiPenTool } from "react-icons/fi"
import { SEO } from "../components/SEO"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="odmishien" keywords={[`gatsby`]}></SEO>
      <Layout>
        <Container>
          <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="mb-4">
              <h1 className="mr-2">🍢odmishien🍢</h1>
            </div>
            <div>
              <Icon></Icon>
            </div>
            <AniLink fade to="about">
              <h3>👱 About</h3>
            </AniLink>
            <AniLink fade to="works">
              <h3>🎨 Works</h3>
            </AniLink>
            <AniLink fade to="posts">
              <h3>📓 Posts</h3>
            </AniLink>
            <div className="d-flex flex-row justify-content-between my-3">
              <a className="mr-1" href="https://twitter.com/odmishien">
                <h1>
                  <FiTwitter />
                </h1>
              </a>
              <a className="mr-1" href="https://github.com/odmishien">
                <h1>
                  <FiGithub />
                </h1>
              </a>
              <a className="mr-1" href="https://odmishien.hatenablog.jp/">
                <h1>
                  <FiPenTool />
                </h1>
              </a>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
