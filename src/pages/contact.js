import React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import ContactForm from "../components/contact-form/contact-form"
import Head from "../components/head"
import Header from "../components/header/header"

const ContactPage = () => {
  return (
    <Layout>
      <Head page="Contact" />
      <Header heading="Get in touch">
        <Typography paragraph>
          Whether it be a quick coffee chat or a new opportunity, don't be
          afraid to get in touch using the form below. Your submission will
          automatically be sent to my email.
        </Typography>
        <Typography paragraph>
          If you want a more likely quicker response, DM me on my{" "}
          <a
            href="https://twitter.com/_dean21"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          handle.
        </Typography>
      </Header>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
