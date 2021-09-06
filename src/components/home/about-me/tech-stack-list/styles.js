import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  techList: {
    paddingInlineStart: 0,
  },

  techListIcon: {
    maxHeight: "0.875rem",
  },

  techListItem: {
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: 0,
  },

  techListItemText: {
    "& > span": {
      fontFamily: "Monospace",
      fontSize: "0.875rem",
    },
  },
}))

export default useStyles
