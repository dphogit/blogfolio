import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "@material-ui/core"

import Layout from "../components/layout"
import useStyles from "../styles/markdown"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        indexImage {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
      html
    }
  }
`

const BlogPost = props => {
  const classes = useStyles()

  const { frontmatter } = props.data.markdownRemark
  const image = getImage(frontmatter.indexImage)

  return (
    <Layout>
      <Container maxWidth="md" className={classes.markdown}>
        <GatsbyImage image={image} alt={frontmatter.indexImage.name} />
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </Container>
    </Layout>
  )
}

export default BlogPost
