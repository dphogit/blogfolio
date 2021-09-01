import React from "react"
import { Avatar, makeStyles } from "@material-ui/core"

import Svg from "../../assets/avatar.svg"

const useStyles = makeStyles({
  root: {
    backgroundColor: props => props.backgroundColor,
    width: "100%",
    height: "100%",
  },
  svg: {
    width: "100%",
    height: "100%",
  },
})

const SvgAvatar = props => {
  const classes = useStyles(props)

  return (
    <Avatar className={classes.root} variant="square">
      <Svg className={classes.svg} />
    </Avatar>
  )
}

export default SvgAvatar
