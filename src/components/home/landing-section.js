import React from "react"

import {
  Grid,
  Typography,
  Grow,
  Button,
  Zoom,
  IconButton,
} from "@material-ui/core"
import { Link } from "gatsby"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

import useStyles from "./styles"

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
              <Link to="/contact">
                <Button variant="outlined">Contact Me</Button>
              </Link>
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
            <IconButton>
              <KeyboardArrowDownIcon className={classes.arrowDown} />
            </IconButton>
          </Zoom>
        </Grid>
      </Grid>
    </section>
  )
}

export default LandingSection
