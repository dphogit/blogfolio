import { makeStyles } from "@material-ui/core/styles"

const TEXT_FONT_SIZE = "1.375rem"
const TEXT_FONT_SIZE_SMALL = "1rem"
const RALEWAY = "Raleway, sans-serif"
const OPEN_SANS = "Open Sans, sans-serif"

/**
 * Styles for markdown content in blog posts
 */
const useStyles = makeStyles(theme => ({
  content: {
    "& h1": {
      fontFamily: RALEWAY,
      fontSize: "3.75rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },

    "& h2": {
      fontFamily: RALEWAY,
      fontSize: "2.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },

    "& h3": {
      fontFamily: RALEWAY,
      fontSize: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },

    "& h4:": {
      fontFamily: RALEWAY,
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },

    "& h5:": {
      fontFamily: RALEWAY,
    },

    "& h6:": {
      fontFamily: RALEWAY,
    },

    "& ol": {
      fontFamily: OPEN_SANS,
    },

    "& ul": {
      fontFamily: OPEN_SANS,
    },

    "& li": {
      fontFamily: OPEN_SANS,
      fontSize: TEXT_FONT_SIZE,
      [theme.breakpoints.down("sm")]: {
        fontSize: TEXT_FONT_SIZE_SMALL,
      },
    },

    "& p": {
      fontFamily: OPEN_SANS,
      fontSize: TEXT_FONT_SIZE,
      [theme.breakpoints.down("sm")]: {
        fontSize: TEXT_FONT_SIZE_SMALL,
      },
    },

    "& a": {
      fontFamily: OPEN_SANS,
      color: "black",
      textUnderlineOffset: "0.125rem",
    },

    marginBottom: "7.5rem",
  },

  header: {
    margin: "1rem 0",
  },

  dateAndReadTime: {
    display: "flex",
    opacity: 0.95,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  readTime: {
    marginLeft: "1.75rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",

    "& img": {
      maxWidth: "100%",
    },
  },
}))

export default useStyles
