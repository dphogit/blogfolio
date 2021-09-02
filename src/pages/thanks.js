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
    marginBottom: "1rem",
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

const ThanksPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head page="Submission Successful" />
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.title} align="center">
          Thank you for your submission!
        </Typography>
        <Typography align="center">
          I will hopefully get back in touch soon.
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

export default ThanksPage
