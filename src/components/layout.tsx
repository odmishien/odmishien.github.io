import React from "react"

import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

type TemplateProps = {
  children: JSX.Element[]
}

const Layout: React.FC<TemplateProps> = ({ children }) => <div>{children}</div>

export default Layout
