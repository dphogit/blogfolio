import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: "100%",
  },

  slug: {
    color: "black",
    textDecoration: "none",

    "& h5": {
      fontFamily: "Raleway, sans-serif",
      lineHeight: "1.75rem",
      margin: "0.5rem 0",
      [theme.breakpoints.down("md")]: {
        lineHeight: "1.4rem",
        fontSize: "1.25rem",
      },
    },

    "& p": {
      fontFamily: "Roboto, sans-serif",
    },

    "&:hover": {
      "& h5": {
        textDecoration: "underline",
      },
    },
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    opacity: 0.7,
  },

  blurb: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
  },
}))

export default useStyles
