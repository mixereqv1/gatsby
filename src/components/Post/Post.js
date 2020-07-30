import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const Post = () => {
  const data = useStaticQuery(query);
  const { description } = data.site.siteMetadata;

  return <p>{description}</p>;
};

export default Post;
