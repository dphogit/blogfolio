import React from "react"
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

import useStyles from "./styles"

const TimelineEvent = props => {
  const classes = useStyles(props)

  const { date, isExperience, description, isEnd } = props

  return (
    <TimelineItem className={classes.timelineItem}>
      <TimelineOppositeContent>
        <Typography variant="subtitle1" color="textPrimary">
          {date}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot className={classes.timelineDot} />
        {!isEnd && <TimelineConnector className={classes.timelineConnector} />}
      </TimelineSeparator>

      <TimelineContent>
        <Paper elevation={2} className={classes.timelinePaper}>
          <Typography variant="h3" gutterBottom>
            {isExperience ? "Experience" : "Honour"}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineEvent
