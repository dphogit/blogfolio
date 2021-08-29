import React from "react"
import { Toolbar, Typography, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navigation: {
    height: "7rem",
    display: "flex",
    padding: 0,

    backgroundColor: "white",
  },
  main: {
    flexGrow: 10,

    fontFamily: "Staatliches, cursive",
    fontSize: "2.625rem",
  },
  mainLink: {
    textDecoration: "none",
  },
  link: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),

    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "black",
  },
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar className={classes.navigation}>
        <Typography variant="h6" className={classes.main}>
          <Link to="/" className={classes.mainLink}>
            <span style={{ color: "black" }}>Dean</span>
            <span style={{ color: "rgba(0, 0, 0, 0.25)" }}>Phommahaxay</span>
          </Link>
        </Typography>
        <Link to="/blog" className={classes.link}>
          Blog
        </Link>
        <Link to="/contact" className={classes.link}>
          Contact
        </Link>
      </Toolbar>
    </div>
  )
}

export default Navigation
