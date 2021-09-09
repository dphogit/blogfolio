import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
  Grow,
} from "@material-ui/core"

import TechStackList from "./tech-stack-list/tech-stack-list"
import useStyles from "./styles"

const AboutMe = () => {
  const classes = useStyles()

  const theme = useTheme()
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const content = (
    <div>
      <Typography variant="h1" component="h2" className={classes.aboutHeading}>
        About Me
      </Typography>
      <Typography className={classes.bio} paragraph>
        Hello there! I'm Dean and despite still being a student I'm a keen
        individual who likes to wander outside of my degree. My hobbies include
        playing football and keeping active.
      </Typography>

      <Typography className={classes.bio} paragraph>
        I’m a school-taught software engineer and a self-taught web developer.
        I’ve had the privilege to gain work experience as an intern at an{" "}
        <a href="https://www.scottphs.com/" target="_blank" rel="noreferrer">
          automation company
        </a>{" "}
        working on a web research and development project which was the
        acceleration and stem of my venture into web development.
      </Typography>

      <Typography
        className={classes.bio}
        align={isSmallScreen ? "left" : "center"}
        variant="body1"
      >
        Technologies I've proficiently worked with:
      </Typography>
    </div>
  )

  return (
    <section id="about-me" className={classes.aboutMeSection}>
      <Grid
        spacing={isExtraSmallScreen ? 3 : 4}
        container
        direction={isSmallScreen ? "column" : "row"}
        justifyContent="space-between"
      >
        <Grid
          container
          item
          md={6}
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          {isExtraSmallScreen ? (
            <Grow in={true} timeout={6000}>
              {content}
            </Grow>
          ) : (
            content
          )}
          <TechStackList />
        </Grid>
        <Grid
          container
          item
          md={6}
          sm={8}
          xs={12}
          justifyContent={isSmallScreen ? "flex-start" : "center"}
          alignItems="center"
          className={classes.rightCol}
        >
          <div>
            <svg>
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            <div className={classes.imgWrapper}>
              <StaticImage
                src="../../../assets/picture.png"
                alt="My Profile Picture"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default AboutMe
