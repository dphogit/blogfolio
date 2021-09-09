import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

import useStyles from "./styles"

const LinkButton = ({ children, navigateTo }) => {
  const classes = useStyles()

  return (
    <Link to={navigateTo} style={{ textDecoration: "none" }}>
      <Button className={classes.linkButton} variant="outlined">
        {children}
      </Button>
    </Link>
  )
}

export default LinkButton
