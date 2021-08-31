import React from "react"
import { Typography, makeStyles, Card, CardContent } from "@material-ui/core"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  slug: {
    color: "black",
    textDecoration: "none",

    "& h5": {
      fontFamily: "Raleway, sans-serif",
      lineHeight: "1.75rem",
      margin: "0.5rem 0",
      [theme.breakpoints.down("md")]: {
        lineHeight: "1.4rem",
        fontSize: "1.25rem",
      },
    },

    "& p": {
      fontFamily: "Roboto, sans-serif",
    },

    "&:hover": {
      "& h5": {
        textDecoration: "underline",
      },
    },
  },

  details: {
    display: "flex",
    opacity: 0.7,
  },

  blurb: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
  },
}))

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
