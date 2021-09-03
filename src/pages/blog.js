import React from "react"
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slug from "../components/slug/slug"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query GetAllBlogPosts {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            blurb
            slug
            publishedDate(formatString: "DD-MM-YYYY")
            photo {
              gatsbyImageData
              title
            }
            fields {
              readingTime {
                text
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
      <Head page="Blog" />
      <Typography
        align="center"
        variant={matches ? "h3" : "h1"}
        style={{ fontFamily: "Raleway , sans-serif", margin: "2rem" }}
      >
        Blog Posts
      </Typography>
      <Grid container spacing={matches ? 5 : 10}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <Grid key={edge.node.id} lg={3} md={4} item>
            <Slug node={edge.node} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default BlogPage
