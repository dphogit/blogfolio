import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: "8.75rem",

    "& h1": {
      marginBottom: "1rem",
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
    },
  },

  blogPosts: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}))

export default useStyles
