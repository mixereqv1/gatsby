import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Button from '../components/Button/Button';

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
`;

const StyledHeading = styled.h1`
  font-size: 105px;
  margin: 0;
  width: 45%;
  line-height: 0.9;
`;

const StyledParagraph = styled.p`
  margin: 20px 0 40px;
  width: 25%;
`;

const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <>
    <ContentWrapper>
      <StyledHeading>Your new space</StyledHeading>
      <StyledParagraph>
        While artists work from real to the abstract, architects must work from the abstract to the
        real.
      </StyledParagraph>
      <Button>estimate project</Button>
    </ContentWrapper>
    <StyledImg fluid={fluid} />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
