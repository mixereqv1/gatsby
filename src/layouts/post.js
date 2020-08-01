import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export const query = graphql`
  query querySingleArticle($postId: String!) {
    datoCmsArticle(id: { eq: $postId }) {
      title
      author
      meta {
        createdAt(formatString: "DD.MM.YYYY")
      }
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
          id
        }
      }
      featuredImage {
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      id
    }
  }
`;

const PostLayout = ({
  data: {
    datoCmsArticle: {
      author,
      title,
      articleContent,
      meta: { createdAt },
      featuredImage: { fixed },
    },
  },
}) => (
  <div>
    <h1>{title}</h1>
    <p>{author}</p>
    <p>Created {createdAt}</p>
    <Img fixed={fixed} />
    {articleContent.map((item) => {
      const itemKey = Object.keys(item)[1];

      switch (itemKey) {
        case 'paragraphContent':
          return <p key={item.id}>{item[itemKey]}</p>;
        case 'headingContent':
          return <h2 key={item.id}>{item[itemKey]}</h2>;
        case 'imageData':
          return <Img key={item.id} fixed={item[itemKey].fixed} />;
        default:
          return null;
      }
    })}
  </div>
);

export default PostLayout;
