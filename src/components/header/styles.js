import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: "8.75rem",

    "& h1": {
      marginBottom: "1rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "4rem",
        lineHeight: "4rem",
      },
    },

    "& a": {
      color: theme.palette.primary.light,
      fontWeight: "bold",
      textDecoration: "none",
    },

    "& a:hover": {
      textUnderlineOffset: "0.25rem",
      textDecoration: "underline",
    },

    "& p": {
      fontSize: "1.25rem",
      lineHeight: "2rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: "3.875rem",
    },
  },
}))

export default useStyles
