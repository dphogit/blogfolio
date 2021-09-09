import React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Head from "../components/head"
import Header from "../components/header/header"
import LinkButton from "../components/link-button/link-button"

import useStyles from "../page-styles/404"

const NotFoundPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head page="404 Not Found" />
      <div className={classes.notFoundWrapper}>
        <Header heading="Oh oh... page not found">
          <Typography paragraph>
            You’ve stumbled into lost territory. Let’s take you back to
            somewehere familiar!
          </Typography>
        </Header>
        <LinkButton navigateTo="/">Home Page</LinkButton>
      </div>
    </Layout>
  )
}

export default NotFoundPage
