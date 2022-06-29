import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header: React.FC = () => {
  return (
    <AniLink fade to="/">
      <div className="h1">👈</div>
    </AniLink>
  )
}

export default Header
