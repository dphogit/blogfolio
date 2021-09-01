import React from "react"
import { Typography, Card, CardContent } from "@material-ui/core"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import useStyles from "./styles"

const Slug = ({ node }) => {
  const classes = useStyles()
  const { frontmatter, timeToRead } = node
  const { indexImage } = frontmatter

  const readingTime = `${timeToRead} min read`

  return (
    <Card variant="outlined" key={node.id}>
      <Link className={classes.slug} to={`/blog/${node.fields.slug}`}>
        <GatsbyImage image={getImage(indexImage)} alt={indexImage.name} />
        <CardContent>
          <Typography variant="body2" className={classes.details}>
            <span>{frontmatter.date}</span>
            <span style={{ marginLeft: "1rem" }}>{readingTime}</span>
          </Typography>
          <Typography variant="h5">{frontmatter.title}</Typography>
          <Typography className={classes.blurb}>{frontmatter.blurb}</Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default Slug
