import React, { useState, useEffect } from "react"
import { Container, makeStyles, Fade, Fab } from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

import Navigation from "./navigation/navigation"
import LoadingScreen from "./loading-screen/loading-screen"
import ScrollTop from "./scroll-top/scroll-top"
import Footer from "./footer/footer"

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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <Fade in={true}>
        <LoadingScreen />
      </Fade>
    )
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Navigation />
      {props.children}
      <ScrollTop>
        <Fab color="primary" aria-label="scroll back to top" size="medium">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </Container>
  )
}

export default Layout
