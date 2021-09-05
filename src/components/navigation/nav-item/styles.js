import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  link: {
    flexGrow: 1,
    marginLeft: "0.75rem",
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.25rem",
    textAlign: "right",
    textDecoration: "none",
    color: theme.palette.common.black,

    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "0.75rem",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  activeLink: {
    textDecoration: "underline",
    textUnderlineOffset: "0.75rem",
  },
}))

export default useStyles
