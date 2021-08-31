import { makeStyles } from "@material-ui/core"

const TEXT_FONT_SIZE = "1.375rem"
const RALEWAY = "Raleway, sans-serif"
const OPEN_SANS = "Open Sans, sans-serif"

/**
 * Styles for markdown content in blog posts
 */
const useStyles = makeStyles({
  markdown: {
    "& h1": {
      fontFamily: RALEWAY,
      fontSize: "3.75rem",
    },

    "& h2": {
      fontFamily: RALEWAY,
      fontSize: "2.5rem",
    },

    "& h3": {
      fontFamily: RALEWAY,
      fontSize: "2rem",
    },

    "& h4:": {
      fontFamily: RALEWAY,
      fontSize: "1.5rem",
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
    },

    "& p": {
      fontFamily: OPEN_SANS,
      fontSize: TEXT_FONT_SIZE,
    },

    "& a": {
      fontFamily: OPEN_SANS,
      color: "black",
      textUnderlineOffset: "0.125rem",
    },

    marginBottom: "10rem",
  },

  header: {
    margin: "1rem 0",
  },
})

export default useStyles
