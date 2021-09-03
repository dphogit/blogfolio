const path = require("path")
const readingTime = require("reading-time")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.body != null) {
    createNodeField({
      node,
      name: "readingTime",
      value: readingTime(node.body.raw),
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog-post.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
