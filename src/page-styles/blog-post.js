import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  blogHeader: {
    marginTop: "3.75rem",
    marginBottom: "2rem",

    "& h1": {
      fontFamily: theme.typography.blogHeader.fontFamily,
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },

    "& p": {
      color: theme.palette.text.secondary,
      fontSize: "1.25rem",
    },

    "& a": {
      textDecoration: "none",
      fontWeight: "bold",
      color: "inherit",
    },

    "& a:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "0.25rem",
    },
  },

  blogContent: {
    marginBottom: theme.spacing(6),

    "& h2": {
      fontFamily: theme.typography.blogHeader.fontFamily,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
      },
    },

    "& h3": {
      fontFamily: theme.typography.blogHeader.fontFamily,
      fontSize: "2rem",
      lineHeight: "2.5rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
      },
    },

    "& h4": {
      fontFamily: theme.typography.blogHeader.fontFamily,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
        lineHeight: "1.375rem",
      },
    },

    "& h5, h6": {
      fontFamily: theme.typography.blogHeader.fontFamily,
      fontSize: "1.5rem",
      lineHeight: "2rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "0.875rem",
        lineHeight: "1.375rem",
      },
    },

    "& p": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "0.875rem",
        lineHeight: "1.375rem",
      },
    },

    "& a": {
      textDecoration: "none",
      fontWeight: "bold",
      color: theme.palette.primary.light,
    },

    "& a:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "0.25rem",
    },
  },

  blogImageWrapper: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    margin: "2.5rem 0",

    "& img": {
      maxWidth: "100%",
    },
  },
}))

export default useStyles
