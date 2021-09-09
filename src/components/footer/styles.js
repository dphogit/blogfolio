import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footer: {
    padding: "4rem 1rem",
    marginTop: "4rem",
    marginBottom: "2rem",
    borderTop: `1px solid ${theme.palette.text.secondary}`,

    "& h4": {
      fontSize: "2rem",
      lineHeight: "2.25rem",

      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },

    "& button": {
      marginTop: "1rem",
      width: "30%",
      height: "2.75rem",
      fontSize: "1rem",
      borderRadius: 0,

      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },

      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
    },
  },

  imageWrapper: {
    width: "50%",
    marginBottom: "1rem",
    border: `2px solid ${theme.palette.common.black}`,

    [theme.breakpoints.down("xs")]: {
      width: "75%",
      marginBottom: "0.5rem",
    },
  },

  bio: {
    fontSize: "1rem",
    lineHeight: "1.45rem",
    width: "60%",

    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },

  social: {
    display: "flex",
    maxWidth: "30%",
    justifyContent: "space-between",
    marginTop: "1.25rem",

    "& svg": {
      maxHeight: "2rem",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "70%",
    },
  },

  quickLinks: {
    fontFamily: theme.typography.fontFamily,

    "& h5": {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },

    "& ul": {
      listStyle: "none",
      padding: 0,
    },

    "& li": {
      marginTop: "1.25rem",
      fontSize: "1rem",

      [theme.breakpoints.down("xs")]: {
        marginTop: "0.75rem",
      },
    },

    "& a": {
      textDecoration: "none",
      color: theme.palette.common.black,
    },

    "& a:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "0.5rem",
    },
  },
}))

export default useStyles
