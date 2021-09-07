import React from "react"

import Timeline from "@material-ui/lab/Timeline"
import Typography from "@material-ui/core/Typography"

import TimelineEvent from "./timeline-event/timeline-event"
import useStyles from "./styles"

const HonoursAndExperience = () => {
  const classes = useStyles()

  return (
    <section id="honours-and-experience" className={classes.honoursSection}>
      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        align="center"
        className={classes.heading}
      >
        Honours and Experience
      </Typography>
      <Timeline id="timeline" align="alternate" className={classes.timeline}>
        <TimelineEvent
          date="February 2019"
          isExperience
          description="Deputy Head Prefect"
        />
        <TimelineEvent
          date="October 2019"
          description="Proxime Accessit (Runner's Up Dux Litterarum)"
        />
        <TimelineEvent
          date="October 2019"
          description="School Leavers Top Achiever Scholarship"
        />
        <TimelineEvent
          date="November 2020"
          description="Dean's Honours List For Part I Engineering"
        />
        <TimelineEvent
          date="November 2020"
          isExperience
          description="Intern at Scott Package Handling Systems"
        />
        <TimelineEvent
          date="August 2021"
          isExperience
          isEnd
          description="AWS Early Careers Innovation Program"
        />
      </Timeline>
    </section>
  )
}

export default HonoursAndExperience
