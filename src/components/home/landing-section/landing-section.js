import React from "react"

import { Grid, Typography, Grow } from "@material-ui/core"

import useStyles from "./styles"
import LinkButton from "../../link-button/link-button"
import ScrollDownAnimateButton from "../../scroll-down-animate-button/scroll-down-animate-button"

const LandingSection = () => {
  const classes = useStyles()

  return (
    <section id="landing" className={classes.landingSection}>
      <Grid container direction="column" className={classes.landingGrid}>
        <Grid
          container
          item
          alignItems="flex-end"
          className={classes.heroWrapper}
        >
          <Grow in={true} timeout={5000}>
            <div id="hero" className={classes.hero}>
              <Typography>Hi, my name is</Typography>
              <Typography variant="h1">
                Dean
                <br />
                Phommahaxay.
              </Typography>
              <Typography>
                I'm a <strong>Software Engineering Student</strong> and{" "}
                <strong>Developer</strong> at the University of Auckland, New
                Zealand.
              </Typography>
              <LinkButton navigateTo="/contact">Contact Me</LinkButton>
            </div>
          </Grow>
        </Grid>
        <Grid
          container
          className={classes.arrowDownGroup}
          justifyContent="center"
          alignItems="flex-end"
        >
          <ScrollDownAnimateButton targetId="#about-me" />
        </Grid>
      </Grid>
    </section>
  )
}

export default LandingSection
