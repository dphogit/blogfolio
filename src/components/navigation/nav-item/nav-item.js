import React from "react"
import { Link } from "gatsby"

import useStyles from "./styles"

const NavItem = ({ destination, children }) => {
  const classes = useStyles()

  return (
    <Link
      to={destination}
      activeClassName={classes.activeLink}
      className={classes.link}
    >
      {children}
    </Link>
  )
}

export default NavItem
