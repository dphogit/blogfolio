import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  card: {
    padding: "1.5rem 0.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 0.25rem",
    },
  },

  cardHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",

    "& h3": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },

    "& svg": {
      width: "7.5%",
      marginLeft: "1rem",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  footer: {
    marginTop: theme.spacing(3),
  },

  socialActions: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: theme.spacing(1),
    width: "45%",

    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },

    "& a": {
      width: "25%",
      margin: "5%",

      "& svg": {
        width: "100%",
        top: 0,
      },
    },
  },
}))

export default useStyles
