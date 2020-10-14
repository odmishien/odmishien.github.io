import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Row } from "react-bootstrap"
import Image from "gatsby-image"
import { IconQuery } from "../../types/graphql-types"

const Icon = () => {
  const data: IconQuery = useStaticQuery(graphql`
    query Icon {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Row className="mb-4">
      <>
        {data?.file?.childImageSharp?.fixed && (
          <Image fixed={data?.file?.childImageSharp?.fixed} />
        )}
      </>
    </Row>
  )
}

export default Icon
