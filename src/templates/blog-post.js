import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS, BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import Head from "../components/head"
import Footer from "../components/footer/footer"
import useStyles from "../page-styles/blog-post"

export const query = graphql`
  query GetBlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do YYYY")
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
const Text = ({ children }) => <Typography gutterBottom>{children}</Typography>

const BlogPost = props => {
  const classes = useStyles()

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <div className={classes.blogImageWrapper}>
          <img src={node.data.target.fluid.src} alt={node.data.target.title} />
        </div>
      ),
    },
  }

  const {
    title,
    publishedDate,
    photo,
    photographer,
    photographerLink,
    body,
    fields,
  } = props.data.contentfulBlogPost

  return (
    <Layout>
      <Head page={title} />
      <header id="blog-header" className={classes.blogHeader}>
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>

        <Typography>{publishedDate}</Typography>
        <Typography gutterBottom>{fields.readingTime.text}</Typography>

        <GatsbyImage image={getImage(photo)} alt={photo.title} />
        <Typography variant="caption">
          Photo By: <a href={photographerLink}>{photographer}</a>
        </Typography>
      </header>
      <section id="blog-content" className={classes.blogContent}>
        {body && renderRichText(body, options)}
      </section>
      <Footer />
    </Layout>
  )
}

export default BlogPost
