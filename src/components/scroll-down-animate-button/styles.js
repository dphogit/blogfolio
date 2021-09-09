import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  "@keyframes arrowBounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-30px))",
    },
    "60%": {
      transform: "translateY(-15px)",
    },
  },

  arrowDown: {
    fontSize: "3rem",
    animationDelay: "8s",
    animation: "$arrowBounce 2s infinite",
  },
}))

export default useStyles
