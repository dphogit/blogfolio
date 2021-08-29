import React from "react"
import { Typography } from "@material-ui/core"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Typography variant="h1">Contact Me</Typography>
      <Typography>
        twitter:{" "}
        <a href="https://twitter.com/_dean21" target="_blank" rel="noreferrer">
          @_dean21
        </a>
      </Typography>
    </Layout>
  )
}

export default ContactPage
