import React from "react"
import { Container } from "@material-ui/core"

import Navigation from "./navigation"
import "../styles/index.css"

const Layout = props => {
  return (
    <Container maxWidth="xl" style={{ marginLeft: "2.5vw", maxWidth: "95vw" }}>
      <Navigation />
      {props.children}
    </Container>
  )
}

export default Layout
