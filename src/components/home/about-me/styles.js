import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  aboutMeSection: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  aboutHeading: {
    marginBottom: "1rem",
  },

  bio: {
    fontSize: "1rem",
    "& a": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "none",
    },

    "& a:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "0.25rem",
    },
  },

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

  rightCol: {
    "& > div": {
      position: "relative",
      width: "75%",
    },

    "& svg": {
      position: "absolute",
      display: "block",
      width: "100%",
      height: "100%",
    },

    "& rect": {
      strokeWidth: 4,
      stroke: theme.palette.common.black,
      fill: theme.palette.text.secondary,
    },
  },
}))

export default useStyles
