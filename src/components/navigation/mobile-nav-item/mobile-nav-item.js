import React from "react"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "gatsby"

import useStyles from "./styles"

const MobileNavItem = ({ destination, children }) => {
  const classes = useStyles()

  return (
    <ListItem>
      <Link to={destination} className={classes.mobileLink}>
        {children}
      </Link>
    </ListItem>
  )
}

export default MobileNavItem
