import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  inputWrapper: {
    marginBottom: theme.spacing(2),
  },

  inputLabel: {
    color: theme.palette.common.black,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    marginBottom: "0.25rem",
  },

  inputBox: {
    borderRadius: 0,
    border: `1px solid ${theme.palette.common.black}`,
    width: "100%",
    backgroundColor: "#FFF",
  },

  inputBoxError: {
    border: `1px solid ${theme.palette.error.main}`,
  },
}))

export default useStyles
