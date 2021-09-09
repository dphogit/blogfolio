import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  honoursSection: {
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    paddingTop: "1rem",

    [theme.breakpoints.down("xs")]: {
      borderTop: 0,
      marginTop: "1.75rem",
    },
  },

  heading: {
    fontSize: "3.375rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
      marginBottom: "2rem",
    },
  },

  timeline: {
    marginTop: "1rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
}))

export default useStyles
