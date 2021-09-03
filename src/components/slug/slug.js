import React from "react"
import { Typography, Card, CardContent } from "@material-ui/core"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import useStyles from "./styles"

const Slug = ({ node }) => {
  const classes = useStyles()

  const { title, blurb, slug, publishedDate, photo, fields } = node

  return (
    <Card variant="outlined" className={classes.card} key={node.id}>
      <Link className={classes.slug} to={`/blog/${slug}`}>
        <GatsbyImage image={getImage(photo)} alt={photo.title} />
        <CardContent>
          <Typography variant="body2" className={classes.details}>
            <span>{publishedDate}</span>
            <span>{fields.readingTime.text}</span>
          </Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography className={classes.blurb}>{blurb}</Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default Slug
