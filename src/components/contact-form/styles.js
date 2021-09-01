import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(3),
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& button[type=submit]": {
      marginLeft: theme.spacing(2),
    },
  },
}))

export default useStyles
