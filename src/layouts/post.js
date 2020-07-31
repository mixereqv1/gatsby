import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const querySingleArticle = graphql`
  query queryArticles($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        featuredImage {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;

const PostLayout = ({
  data: {
    mdx: {
      body,
      frontmatter: {
        author,
        title,
        featuredImage: {
          childImageSharp: { fixed },
        },
      },
    },
  },
}) => (
  <div>
    <h1>{title}</h1>
    <p>{author}</p>
    <Img fixed={fixed} />
    <MDXRenderer>{body}</MDXRenderer>
  </div>
);

export default PostLayout;
