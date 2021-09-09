import React from "react"
import { Link } from "gatsby"

import useStyles from "./styles"

const Logo = props => {
  const classes = useStyles(props)

  return (
    <Link to="/" className={classes.logo}>
      <span>Dean</span>
      <span>Phommahaxay</span>
    </Link>
  )
}

export default Logo
