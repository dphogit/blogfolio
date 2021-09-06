import React from "react"
import { Grid, ListItemIcon, ListItem, ListItemText } from "@material-ui/core/"
import CmdTerminalSvg from "../../../../assets/cmd-terminal.svg"
import useStyles from "./styles"

const TechListItem = ({ item }) => {
  const classes = useStyles()

  return (
    <Grid item component={ListItem} xs={6} className={classes.techListItem}>
      <ListItemIcon className={classes.techListIcon}>
        <CmdTerminalSvg />
      </ListItemIcon>
      <ListItemText primary={item} className={classes.techListItemText} />
    </Grid>
  )
}

const TechListRow = ({ item1, item2 }) => (
  <Grid container item justifyContent="space-between" alignItems="flex-start">
    <TechListItem item={item1} />
    <TechListItem item={item2} />
  </Grid>
)

const TechStackList = () => (
  <Grid
    container
    direction="column"
    component="ul"
    justifyContent="flex-start"
    alignItems="flex-start"
    style={{ paddingInlineStart: 0 }}
  >
    <TechListRow item1="JavaScript (ES6)" item2="TypeScript" />
    <TechListRow item1="React" item2="Node.js" />
    <TechListRow item1="Java and JavaFX" item2="Linux (Bash)" />
  </Grid>
)

export default TechStackList
