import React, { useState } from "react"
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Slide,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import useStyles from "./styles"
import Logo from "../logo/logo"
import MobileNavItem from "./mobile-nav-item/mobile-nav-item"
import NavItem from "./nav-item/nav-item"

const Navigation = () => {
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const desktopView = (
    <>
      <NavItem destination="/blog">Blog</NavItem>
      <NavItem destination="/contact">Contact</NavItem>
    </>
  )

  const mobileView = (
    <>
      <IconButton
        className={classes.mobileMenu}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <ListItem>
            <Logo isLight={false} />
          </ListItem>
          <MobileNavItem destination="/blog">Blog</MobileNavItem>
          <MobileNavItem destination="/contact">Contact</MobileNavItem>
        </List>
      </Drawer>
    </>
  )

  return (
    <Slide in={true} timeout={500} direction="down">
      <nav id="navigation">
        <Toolbar className={classes.toolbar}>
          <Logo isLight={true} />
          {desktopView}
          {mobileView}
        </Toolbar>
      </nav>
    </Slide>
  )
}

export default Navigation
