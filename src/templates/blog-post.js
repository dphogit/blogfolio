import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Fab, Typography } from "@material-ui/core"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS, BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import useStyles from "../styles/blog-post"
import ScrollTop from "../components/scroll-top/scroll-top"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Head from "../components/head"

export const query = graphql`
  query GetBlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD-MM-YY")
      photo {
        gatsbyImageData
        title
      }
      photographer
      photographerLink
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fluid {
              src
              srcSet
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const Bold = ({ children }) => (
  <span style={{ fontWeight: "bold" }}>{children}</span>
)
const Text = ({ children }) => <p>{children}</p>

const BlogPost = props => {
  const classes = useStyles()

  const {
    title,
    publishedDate,
    photo,
    photographer,
    photographerLink,
    body,
    fields,
  } = props.data.contentfulBlogPost

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <div className={classes.imageWrapper}>
          <img src={node.data.target.fluid.src} alt={node.data.target.title} />
        </div>
      ),
    },
  }

  return (
    <Layout>
      <Container maxWidth="md" className={classes.content}>
        <Head page={title} />
        <div className={classes.header}>
          <Typography variant="h1" style={{ marginLeft: "-3px" }}>
            {title}
          </Typography>
          <Typography className={classes.dateAndReadTime}>
            <span>{publishedDate}</span>
            <span className={classes.readTime}>{fields.readingTime.text}</span>
          </Typography>
        </div>
        <GatsbyImage image={getImage(photo)} alt={photo.title} />
        <Typography align="center" variant="caption">
          {"Photo By: "}
          <a href={photographerLink}>{photographer}</a>
        </Typography>
        <div>{body && renderRichText(body, options)}</div>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" aria-label="scroll back to top" size="large">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Layout>
  )
}

export default BlogPost
