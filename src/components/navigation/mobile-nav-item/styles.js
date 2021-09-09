import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  mobileLink: {
    marginTop: "0.75rem",
    fontSize: "1.25rem",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
    textDecoration: "none",
  },
}))

export default useStyles
