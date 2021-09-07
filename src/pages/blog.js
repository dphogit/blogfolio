import React from "react"
// import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import Slug from "../components/slug/slug"
import Head from "../components/head"
import Footer from "../components/footer/footer"
import useStyles from "../page-styles/blog"

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
            publishedDate(formatString: "MMMM Do YYYY")
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

  const classes = useStyles()

  return (
    <Layout>
      <Head page="Blog" />
      <header className={classes.header}>
        <Typography variant="h1">Blog Posts</Typography>
        <Typography paragraph>
          Join me on my journey as I blog about a variety of topics ranging from
          specfic practical concepts to general human soft skills. My writing is
          not to only entertain you as the reader but also gives me a chance to
          reflect, revise and reassure the concepts I have picked up on the way
          as well!
        </Typography>
        <Typography paragraph>
          Make sure to follow me on my{" "}
          <a
            href="https://twitter.com/_dean21"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          to keep up to date.
        </Typography>
      </header>
      <Grid container spacing={4} id="blog-posts" className={classes.blogPosts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <Grid key={edge.node.id} xs={12} sm={6} md={4} item>
            <Slug node={edge.node} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Layout>
  )
}

export default BlogPage
