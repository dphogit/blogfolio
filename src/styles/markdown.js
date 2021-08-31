import { makeStyles } from "@material-ui/core"

/**
 * Styles for markdown content in blog posts
 */
const useStyles = makeStyles({
  markdown: {
    "& h1": {
      fontFamily: "Raleway, sans-serif",
    },

    "& p": {
      fontFamily: "Open Sans, sans-serif",
    },
  },
})

export default useStyles
