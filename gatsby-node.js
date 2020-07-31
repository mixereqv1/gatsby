const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsArticle {
        nodes {
          id
          title
        }
      }
    }
  `);
  // , { limit: 1000 }).then(result => {
  // if (result.errors) {
  //   throw result.errors
  // }

  // Create blog post pages.
  result.data.allDatoCmsArticle.nodes.forEach((post) => {
    const slug = slugify(post.title, { lower: true });

    console.log(post.id);

    createPage({
      path: `articles/${slug}`,
      component: blogPostTemplate,
      context: {
        postId: post.id,
      },
    });
  });
};
