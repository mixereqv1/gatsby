const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryArticles {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  // , { limit: 1000 }).then(result => {
  // if (result.errors) {
  //   throw result.errors
  // }

  // Create blog post pages.
  result.data.allMdx.nodes.forEach((post) => {
    createPage({
      path: `articles/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
