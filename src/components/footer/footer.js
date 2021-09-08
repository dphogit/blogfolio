import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import GithubSvg from "../../assets/github.svg"
import LinkedInSvg from "../../assets/linkedin-app.svg"
import TwitterSvg from "../../assets/twitter-app.svg"
import useStyles from "./styles"

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={8}>
          <div className={classes.imageWrapper}>
            <StaticImage src="../../assets/picture.png" alt="profile" />
          </div>
          <Typography variant="h1" component="h4">
            Dean Phommahaxay
          </Typography>
          <Typography paragraph className={classes.bio}>
            School-taught software engineer and self-taught web developer.
          </Typography>
          <div id="social-actions" className={classes.social}>
            <GithubSvg />
            <LinkedInSvg />
            <TwitterSvg />
          </div>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Contact Me</Button>
          </Link>
        </Grid>
        <Grid item sm={6} xs={4} className={classes.quickLinks}>
          <Typography variant="h5">Quick Links</Typography>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
