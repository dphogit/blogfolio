import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  navigation: {
    height: "7rem",
    display: "flex",
    padding: 0,
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      height: "3.75rem",
    },
  },

  main: {
    flexGrow: 10,
    fontFamily: "Staatliches, cursive",
    fontSize: "2.625rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },
  },

  mainLink: {
    textDecoration: "none",
  },

  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "black",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      fontSize: "1rem",
      fontWeight: 400,
    },
  },

  active: {
    textDecoration: "underline",
    textUnderlineOffset: "1rem",
  },

  desktopView: {
    display: "flex",
    flexGrow: 2,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  mobileView: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}))

export default useStyles
