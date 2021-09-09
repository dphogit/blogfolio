import React from "react"

import Zoom from "@material-ui/core/Zoom"
import IconButton from "@material-ui/core/IconButton"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import useStyles from "./styles"

const ScrollAnimateButton = ({ targetId }) => {
  const classes = useStyles()

  const handleScroll = e => {
    const anchor = (e.target.ownerDocument || document).querySelector(targetId)

    if (anchor) {
      anchor.scrollIntoView({
        behaviour: "smooth",
        block: "center",
      })
    }
  }

  return (
    <Zoom in={true} timeout={2500} style={{ transitionDelay: "5s" }}>
      <IconButton onClick={handleScroll}>
        <KeyboardArrowDownIcon className={classes.arrowDown} />
      </IconButton>
    </Zoom>
  )
}

export default ScrollAnimateButton
