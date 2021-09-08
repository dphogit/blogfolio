import { makeStyles } from "@material-ui/core/styles"

const heroLgHeight = "60%"
const heroMdHeight = "70%"

const useStyles = makeStyles(theme => ({
  landingSection: {
    height: "calc(100vh - 64px)", // NavBar is 64 px tall on min width 600px
  },

  landingGrid: {
    height: "100%",
  },

  heroWrapper: {
    height: heroLgHeight,
    width: "65%",

    [theme.breakpoints.down("md")]: {
      height: heroMdHeight,
    },
  },

  hero: {
    "& p": {
      color: theme.palette.text.secondary,
      marginBottom: "1rem",
    },

    "& p:nth-child(1)": {
      lineHeight: "2rem",
      fontSize: "1.5rem",
    },

    "& p:nth-child(3)": {
      lineHeight: "2.5rem",
      fontSize: "1.125rem",
      marginTop: "1rem",
    },

    "& strong:nth-child(1)": {
      fontSize: "1.625rem",
      color: theme.palette.primary.main,
    },

    "& strong:nth-child(2)": {
      fontSize: "1.625rem",
      color: theme.palette.secondary.main,
    },

    "& a": {
      textDecoration: "none",
    },

    "& button": {
      padding: "0.75rem 1.5rem",
      borderRadius: 0,
      fontSize: "1rem",
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
    },
  },

  arrowDownGroup: {
    height: `calc(100% - ${heroLgHeight})`,

    [theme.breakpoints.down("md")]: {
      height: `calc(100% - ${heroMdHeight})`,
    },
  },
}))

export default useStyles
