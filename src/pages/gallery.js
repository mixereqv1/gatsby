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

const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
`;

const GalleryPage = ({
  data: {
    allDatoCmsGallery: { nodes },
  },
}) => (
  <>
    <PageInfo title='gallery' paragraph={pageData.paragraph} />
    <ContentWrapper>
      {nodes.map(({ image, meta: { createdAt } }) => (
        <>
          <StyledParagraph>{createdAt}</StyledParagraph>
          {image.map(({ uploadId: { fluid } }) => (
            <StyledImg fluid={fluid} />
          ))}
        </>
      ))}
    </ContentWrapper>
  </>
);

export const query = graphql`
  query queryGallery {
    allDatoCmsGallery {
      nodes {
        meta {
          createdAt(formatString: "DD.MM.YYYY")
        }
        image {
          uploadId {
            fluid(maxWidth: 408, maxHeight: 252) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
