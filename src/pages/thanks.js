import React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Head from "../components/head"
import Header from "../components/header/header"
import useStyles from "../page-styles/thanks"
import LinkButton from "../components/link-button/link-button"

const ThanksPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head page="Submission Successful" />
      <div className={classes.thanksWrapper}>
        <Header heading="Thanks for being awesome">
          <Typography paragraph>
            Submission was successful. I will get back in touch with you soon,
            have a great day!
          </Typography>
        </Header>
        <LinkButton navigateTo="/">Home Page</LinkButton>
      </div>
    </Layout>
  )
}

export default ThanksPage
