import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  thanksWrapper: {
    "& h1": {
      fontSize: "5rem",

      [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
        lineHeight: "4rem",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        lineHeight: "2rem",
      },
    },

    "& p": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
        lineHeight: "1.375rem",
      },
    },
  },
}))

export default useStyles
