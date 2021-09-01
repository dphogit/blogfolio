import React from "react"
import {
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "gatsby"

import useStyles from "./styles"

const Navigation = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const mobileView = (
    <div className={classes.mobileView}>
      <IconButton
        color="inherit"
        onClick={handleMenu}
        aria-label="menu bar"
        aria-haspopup="true"
        aria-controls="menu-appbar"
      >
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>
          <Link to="/blog" className={classes.link}>
            Blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )

  const desktopView = (
    <div className={classes.desktopView}>
      <Link
        to="/blog"
        className={classes.link}
        activeClassName={classes.active}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className={classes.link}
        activeClassName={classes.active}
      >
        Contact
      </Link>
    </div>
  )

  return (
    <nav className={classes.root} id="nav-bar">
      <Toolbar className={classes.navigation}>
        <Typography variant="h6" className={classes.main}>
          <Link to="/" className={classes.mainLink}>
            <span style={{ color: "black" }}>Dean</span>
            <span style={{ color: "rgba(0, 0, 0, 0.25)" }}>Phommahaxay</span>
          </Link>
        </Typography>
        {desktopView}
        {mobileView}
      </Toolbar>
    </nav>
  )
}

export default Navigation
