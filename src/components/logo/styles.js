import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: "2.625rem",
    fontFamily: theme.typography.h1.fontFamily,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
    },

    "& span": {
      color: props =>
        props.isLight ? theme.palette.common.black : theme.palette.common.white,
    },

    "& span:nth-child(2)": {
      opacity: 0.3,
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}))

export default useStyles
