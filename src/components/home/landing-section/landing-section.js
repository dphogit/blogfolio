import React from "react"

import { Grid, Typography, Grow, Zoom, IconButton } from "@material-ui/core"

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

import useStyles from "./styles"
import LinkButton from "../../link-button/link-button"

const LandingSection = () => {
  const classes = useStyles()

  // Scrolls to the about me section
  const handleScroll = e => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      "#about-me"
    )

    if (anchor) {
      anchor.scrollIntoView({
        behaviour: "smooth",
        block: "center",
      })
    }
  }

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
          <Zoom in={true} timeout={2500} style={{ transitionDelay: "5s" }}>
            <IconButton onClick={handleScroll}>
              <KeyboardArrowDownIcon className={classes.arrowDown} />
            </IconButton>
          </Zoom>
        </Grid>
      </Grid>
    </section>
  )
}

export default LandingSection
