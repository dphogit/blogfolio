import React from "react"
import { Container, ThemeProvider, makeStyles } from "@material-ui/core"

import Navigation from "./navigation/navigation"
import theme from "../theme"
import "../styles/index.css"

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1.875rem",
    },
  },
}))

const Layout = props => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className={classes.container}>
        <Navigation />
        {props.children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout
