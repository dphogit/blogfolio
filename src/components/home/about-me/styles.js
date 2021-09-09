import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  aboutMeSection: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: `1px solid ${theme.palette.text.secondary}`,

    [theme.breakpoints.down("xs")]: {
      borderTop: "none",
      height: "auto",
      marginTop: "4.75rem",
    },
  },

  aboutHeading: {
    marginBottom: "1rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
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

  rightCol: {
    "& > div": {
      position: "relative",
      width: "75%",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "2rem",
      },
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

  imgWrapper: {
    width: "100%",
    height: "100%",
    border: `2px solid ${theme.palette.common.black}`,
    transform: "translate(-1.5rem, -1.5rem)",
    zIndex: 10,

    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
}))

export default useStyles
