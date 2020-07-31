import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import { pageData } from '../data/PageData';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImg = styled(Img)`
  width: 408px;
  height: 252px;
  margin: 11px;
`;

const GalleryPage = ({
  data: {
    allFile: { nodes },
  },
}) => (
  <>
    <PageInfo title='gallery' paragraph={pageData.paragraph} />
    <ContentWrapper>
      {nodes.map(({ childImageSharp: { fluid } }) => (
        <StyledImg key={fluid.base64} fluid={fluid} />
      ))}
    </ContentWrapper>
  </>
);

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 408, maxHeight: 252, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default GalleryPage;
