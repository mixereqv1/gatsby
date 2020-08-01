import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 10px 15px;

  h2,
  span {
    margin: 5px;
  }
`;

const ArticlePreview = ({ title, fluid, slug, createdAt }) => (
  <PreviewWrapper to={slug}>
    <Img fluid={fluid} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <span>{createdAt}</span>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default ArticlePreview;
