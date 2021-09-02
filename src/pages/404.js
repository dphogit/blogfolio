import React from "react"
import { Typography, makeStyles, Button, Container } from "@material-ui/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const useStyles = makeStyles({
  title: {
    fontFamily: "Open Sans, sans-serif",
    textAlign: "center",
    fontWeight: "bold",
  },

  link: {
    margin: "auto",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",

    "& a": {
      textDecoration: "none",
    },
  },
})

const NotFound = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head page="404 Not Found" />
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.title}>
          404 Page Not Found!
        </Typography>
        <div className={classes.link}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Head Home
            </Button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFound
