import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  timelineItem: {
    minHeight: "8rem",
  },

  timelineDot: {
    width: "1.75rem",
    height: "1.75rem",
    // border: `2px solid ${theme.palette.common.black}`,
    backgroundColor: props =>
      props.isExperience
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  },

  timelineConnector: {
    backgroundColor: theme.palette.text.secondary,
  },

  timelinePaper: {
    padding: "0.75rem",
    transform: "translateY(-10px)",

    "& h3": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },

    "& p": {
      fontSize: "1rem",
    },
  },
}))

export default useStyles
