import React from "react"
import { Typography } from "@material-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              blurb
              indexImage {
                name
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Typography variant="h1">Blog Page</Typography>
      <Typography>This is my blog page!</Typography>
      {data.allMarkdownRemark.edges.map(edge => {
        const { frontmatter } = edge.node
        const { indexImage } = frontmatter
        return (
          <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.id}>
            <p>{frontmatter.date}</p>
            <h5>{frontmatter.title}</h5>
            <p>{frontmatter.blurb}</p>
            <img src={getSrc(frontmatter.indexImage)} alt={indexImage.name} />
          </Link>
        )
      })}
    </Layout>
  )
}

export default BlogPage
