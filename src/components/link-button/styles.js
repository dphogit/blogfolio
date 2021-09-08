import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  linkButton: {
    padding: "0.75rem 1.5rem",
    borderRadius: 0,
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
  },
}))

export default useStyles
