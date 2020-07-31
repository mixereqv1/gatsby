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
  padding: 5px 15px;
  h2,
  p {
    margin: 5px;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticlePreview = ({ title, excerpt, fluid, slug }) => (
  <PreviewWrapper to={slug}>
    <StyledImg fluid={fluid} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default ArticlePreview;
