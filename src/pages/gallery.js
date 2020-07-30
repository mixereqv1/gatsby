import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const query = graphql`
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

const StyledHeading = styled.h2`
  font-size: 52px;
  margin: 50px 0 15px;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  width: 20%;
`;

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

const GalleryPage = () => {
  const data = useStaticQuery(query);
  const { nodes } = data.allFile;

  return (
    <>
      <StyledHeading>gallery</StyledHeading>
      <StyledParagraph>
        While artists work from real to the abstract, architects must work from the abstract to the
        real.
      </StyledParagraph>
      <ContentWrapper>
        {console.log(data)}
        {nodes.map(({ childImageSharp: { fluid } }) => (
          <StyledImg key={fluid.base64} fluid={fluid} />
        ))}
      </ContentWrapper>
    </>
  );
};

export default GalleryPage;
