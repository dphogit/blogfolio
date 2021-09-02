import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Fab, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import useStyles from "../styles/blog-post"
import ScrollTop from "../components/scroll-top/scroll-top"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Head from "../components/head"

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
        imageCredit
        imageCreditLink
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
      <Head page={frontmatter.title} />
      <Container maxWidth="md" className={classes.markdown}>
        <div className={classes.header}>
          <Typography variant="h1" style={{ marginLeft: "-3px" }}>
            {frontmatter.title}
          </Typography>
          <Typography>{frontmatter.date}</Typography>
        </div>
        <GatsbyImage image={image} alt={frontmatter.indexImage.name} />
        <Typography align="center" variant="caption">
          {"Photo By: "}
          <Link to={frontmatter.imageCreditLink}>
            {frontmatter.imageCredit}
          </Link>
        </Typography>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
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
