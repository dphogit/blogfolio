import React from "react"
import { Grid, makeStyles, Grow } from "@material-ui/core"

import SvgAvatar from "../svg-avatar/svg-avatar"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    marginBottom: "1rem",
  },
  row: {
    height: "100%",
    width: "100%",
  },
  item: {
    width: "50%",
    height: "50%",
  },
}))

const MobileHomeGraphic = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container} direction="flex-start">
      <Grow in={true} timeout={1000}>
        <Grid item sm={3} className={classes.item}>
          <SvgAvatar backgroundColor="#f65314" />
        </Grid>
      </Grow>

      <Grow in={true} timeout={2000}>
        <Grid item sm={3} className={classes.item}>
          <SvgAvatar backgroundColor="#7cbb00" />
        </Grid>
      </Grow>

      <Grow in={true} timeout={2500}>
        <Grid item sm={3} className={classes.item}>
          <SvgAvatar backgroundColor="#00a1f1" />
        </Grid>
      </Grow>

      <Grow in={true} timeout={3000}>
        <Grid item sm={3} className={classes.item}>
          <SvgAvatar backgroundColor="#ffbb00" />
        </Grid>
      </Grow>
    </Grid>
  )
}

export default MobileHomeGraphic
