import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  honoursSection: {
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    paddingTop: "1rem",
  },
  heading: {
    fontSize: "3.375rem",
  },
  timeline: {
    marginTop: "1rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
}))

export default useStyles
