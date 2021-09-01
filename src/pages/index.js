import React from "react"
import { Grid, Grow, Slide, Typography } from "@material-ui/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AvatarSVG from "../assets/avatar.svg"
import MobileHomeGraphic from "../components/mobile-home-graphic/mobile-home-graphic"
import useStyles from "../styles/home"

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
