import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  slug: {
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(1),

    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },

    "& img": {
      borderRadius: theme.spacing(1),
    },

    "& a": {
      textDecoration: "none",
      color: theme.palette.common.black,
    },

    "& h5": {
      fontWeight: "bold",
      fontFamily: theme.typography.blogHeader.fontFamily,
      fontSize: "1.25rem",
      lineHeight: "1.625rem",
      color: theme.palette.common.black,
    },

    "& p": {
      marginTop: theme.spacing(1),
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      color: theme.palette.text.secondary,
    },
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: "0.75rem",
  },
}))

export default useStyles
