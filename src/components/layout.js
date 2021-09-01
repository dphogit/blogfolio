import React from "react"
import { Container } from "@material-ui/core"

import Navigation from "./navigation/navigation"
import "../styles/index.css"

const Layout = props => {
  return (
    <Container style={{ maxWidth: "95vw" }}>
      <Navigation />
      {props.children}
    </Container>
  )
}

export default Layout
