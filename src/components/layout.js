import React from "react"
import { Container } from "@material-ui/core"

import Navigation from "./navigation"
import "../styles/index.css"

const Layout = props => {
  return (
    <Container maxWidth="lg">
      <Navigation />
      {props.children}
    </Container>
  )
}

export default Layout
