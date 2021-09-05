import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  toolbar: {
    padding: 0,
    alignItems: "flex-end",

    "& a:nth-child(1)": {
      flexGrow: 10,
      lineHeight: "1.75rem",
    },
  },

  mobileMenu: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "initial",
      padding: 0,
      transform: "scale(1.75)",
      margin: "0 0.25rem 0.125rem 0",

      "& span:nth-child(1)": {
        height: "100%",
        justifyContent: "flex-end",
      },
    },
  },

  drawerPaper: {
    backgroundColor: theme.palette.common.black,
    paddingBottom: "1rem",
  },
}))

export default useStyles
