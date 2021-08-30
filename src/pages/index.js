import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  background: {
    top: "13rem",
    height: "34rem",
    width: "100vw",
    position: "absolute",
    zIndex: -1,
    backgroundColor: "#22213C",
  },
  introduction: {
    marginTop: "7.5rem",
  },
  name: {
    lineHeight: 1,
    fontFamily: "Staatliches, cursive",
    fontSize: "5.875rem",
    color: "white",
  },
  description: {
    marginTop: 0,
    width: "70%",
    lineHeight: "2rem",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "1.375rem",
    color: "rgba(255, 255, 255, 0.75)",
  },
  contactText: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.125rem",
    lineHeight: "150%",
    color: "rgba(255, 255, 255, 0.85)",
    marginTop: "4.5rem",
    width: "85%",
  },
  contactButton: {
    height: "3.5rem",
    width: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
    color: "#181818",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.25rem",
    textDecoration: "none",
    backgroundColor: "white",
    "&:hover": {
      opacity: 0.8,
    },
  },
  imageGridItem: {
    height: "95vh",
    marginTop: "-2.5rem",
  },
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <div style={{ height: "100vh" }}>
      <Layout>
        <Grid
          spacing={5}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item lg={6} className={classes.introduction}>
            <Typography className={`${classes.typography} ${classes.name}`}>
              Dean
            </Typography>
            <Typography className={classes.name}>Phommahaxay</Typography>
            <Typography className={classes.description}>
              Software Engineering Student and Developer at University Of
              Auckland, New Zealand
            </Typography>
            <Typography className={classes.contactText}>
              If you’re looking for a passionate and open-minded learner then
              let’s get in touch!
            </Typography>

            <Link className={classes.contactButton} to="/contact">
              Contact Me
            </Link>
          </Grid>
          <Grid item lg={6} className={classes.imageGridItem}>
            <StaticImage src="../images/bg-remove-crop.png" alt="profile" />
          </Grid>
        </Grid>
      </Layout>
      <div className={classes.background} />
    </div>
  )
}

export default HomePage
