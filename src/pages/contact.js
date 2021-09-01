import React from "react"
import {
  Card,
  makeStyles,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core"

import Layout from "../components/layout"
import ContactForm from "../components/contact-form/contact-form"
import NewsletterSvg from "../assets/newsletter.svg"
import GitHubSvg from "../assets/github.svg"
import LinkedInSvg from "../assets/linkedin-app.svg"
import TwitterSvg from "../assets/twitter-app.svg"

const useStyles = makeStyles(theme => ({
  card: {
    padding: "1.5rem 0.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 0.25rem",
    },
  },

  cardHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",

    "& h3": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },

    "& svg": {
      width: "7.5%",
      marginLeft: "1rem",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  footer: {
    marginTop: theme.spacing(3),
  },

  socialActions: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: theme.spacing(1),
    width: "45%",

    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },

    "& a": {
      width: "25%",
      margin: "5%",

      "& svg": {
        width: "100%",
        top: 0,
      },
    },
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Container maxWidth="sm" style={{ padding: 0 }}>
        <Card variant="elevation" className={classes.card}>
          <CardContent>
            <div className={classes.cardHeader}>
              <Typography variant="h3">Get In Touch</Typography>
              <NewsletterSvg />
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
