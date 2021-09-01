import React from "react"
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slug from "../components/slug/slug"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              date
              blurb
              indexImage {
                name
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Layout>
      <Typography
        align="center"
        variant="h1"
        style={{ fontFamily: "Open-sans , sans-serif", margin: "2.5rem" }}
      >
        Posts
      </Typography>
      <Grid container spacing={matches ? 5 : 10}>
        {data.allMarkdownRemark.edges.map(edge => (
          <Grid key={edge.node.id} lg={3} md={4} item>
            <Slug node={edge.node} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default BlogPage
