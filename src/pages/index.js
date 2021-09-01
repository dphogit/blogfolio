import React from "react"
import { Grid, Grow, makeStyles, Slide, Typography } from "@material-ui/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AvatarSVG from "../assets/avatar.svg"
import MobileHomeGraphic from "../components/mobile-home-graphic/mobile-home-graphic"

const useStyles = makeStyles(theme => ({
  background: {
    top: "13rem",
    height: "34rem",
    width: "50vw",
    position: "absolute",
    zIndex: -1,
    backgroundColor: "black",
    opacity: 0.9,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  introduction: {
    marginTop: "8rem",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  name: {
    lineHeight: 1,
    fontFamily: "Staatliches, cursive",
    fontSize: "5.875rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.75rem",
    },
  },
  description: {
    width: "70%",
    lineHeight: "2rem",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "1.375rem",
    color: "rgba(255, 255, 255, 0.75)",
    [theme.breakpoints.down("md")]: {
      color: "black",
      opacity: 0.85,
    },
    [theme.breakpoints.down("sm")]: {
      color: "black",
      width: "100%",
      fontSize: "1rem",
    },
  },
  contactText: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.125rem",
    lineHeight: "150%",
    color: "rgba(255, 255, 255, 0.85)",
    marginTop: "4rem",
    width: "85%",
    [theme.breakpoints.down("md")]: {
      color: "black",
      marginTop: "1rem",
    },
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
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#181818",
      color: "rgba(255, 255, 255, 0.85)",
    },
  },
  imageGridItem: {
    height: "95vh",
    marginTop: "-1.5rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileGraphic: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      margin: "auto",
    },
  },
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <div className={classes.mobileGraphic}>
          <MobileHomeGraphic />
        </div>
        <Grid
          spacing={5}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.container}
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
          <Grow in={true} timeout={{ appear: 0, enter: 2000, exit: 1000 }}>
            <Grid
              item
              lg={6}
              className={classes.imageGridItem}
              style={{ paddingBottom: 0 }}
            >
              <AvatarSVG style={{ height: "100%", width: "100%" }} />
            </Grid>
          </Grow>
        </Grid>
      </Layout>
      <Slide
        direction="right"
        in={true}
        timeout={{ appear: 0, enter: 1000, exit: 0 }}
      >
        <div className={classes.background} />
      </Slide>
    </>
  )
}

export default HomePage
