import React from "react"
import { Card, CardContent, Container, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import ContactForm from "../components/contact-form/contact-form"
import GitHubSvg from "../assets/github.svg"
import LinkedInSvg from "../assets/linkedin-app.svg"
import TwitterSvg from "../assets/twitter-app.svg"
import Head from "../components/head"
import useStyles from "../styles/contact"

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Head page="Contact" />
      <Container maxWidth="sm" style={{ padding: 0 }}>
        <Card variant="elevation" className={classes.card}>
          <CardContent>
            <div className={classes.cardHeader}>
              <Typography
                variant="h3"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Get In Touch
              </Typography>
            </div>
            <ContactForm />
          </CardContent>
        </Card>
        <footer className={classes.footer}>
          <Typography variant="h5" align="center">
            Social Profiles
          </Typography>
          <div className={classes.socialActions}>
            <a
              href="https://www.linkedin.com/in/dean-phommahaxay/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInSvg />
            </a>
            <a
              href="https://github.com/dphogit"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubSvg />
            </a>
            <a
              href="https://twitter.com/_dean21"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterSvg />
            </a>
          </div>
        </footer>
      </Container>
    </Layout>
  )
}

export default ContactPage
