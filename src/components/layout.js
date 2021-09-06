import React, { useState, useEffect } from "react"
import { Container, makeStyles, Fade } from "@material-ui/core"

import Navigation from "./navigation/navigation"
import LoadingScreen from "./loading-screen/loading-screen"

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

const msDelay = 2000

const Layout = props => {
  const classes = useStyles()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), msDelay)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return (
      <Fade in={loading} unmountOnExit>
        <LoadingScreen />
      </Fade>
    )
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Navigation />
      {props.children}
    </Container>
  )
}

export default Layout
