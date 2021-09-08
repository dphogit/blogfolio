import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  contactForm: {
    marginTop: theme.spacing(8),
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    "& button": {
      padding: "0.5rem 1.5rem",
      borderRadius: "4px",
    },

    "& button[type=button]": {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
    },

    "& button[type=button]:hover": {
      backgroundColor: theme.palette.error.dark,
    },

    "& button[type=submit]": {
      marginLeft: theme.spacing(3),
      // border: "2px solid",
    },
  },
}))

export default useStyles
