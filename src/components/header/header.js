import React from "react"

import Typography from "@material-ui/core/Typography"
import useStyles from "./styles"

const Header = ({ heading, children }) => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Typography variant="h1">{heading}</Typography>
      {children}
    </header>
  )
}

export default Header
