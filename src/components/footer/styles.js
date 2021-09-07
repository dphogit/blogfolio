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
    },

    "& button": {
      marginTop: "1rem",
      width: "30%",
      height: "2.75rem",
      fontSize: "1rem",
    },
  },

  imageWrapper: {
    width: "50%",
    marginBottom: "1rem",
    border: `2px solid ${theme.palette.common.black}`,
  },

  bio: {
    fontSize: "1rem",
    lineHeight: "1.45rem",
    width: "60%",
  },

  social: {
    display: "flex",
    maxWidth: "30%",
    justifyContent: "space-between",
    marginTop: "1.25rem",
    "& svg": {
      maxHeight: "2rem",
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
