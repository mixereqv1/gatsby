import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageInfo from '../components/PageInfo/PageInfo';
import styled from 'styled-components';

const StyledDescription = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
  transform: translateY(-60%);
  width: 50%;
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  padding: 50px 100px 50px 65px;

  p {
    font-size: 18px;
    line-height: 1.6;
  }
`;

const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const AboutPage = ({
  data: {
    datoCmsAbout: {
      about,
      paragraph,
      paragraphContent,
      authorContent,
      image: { fluid },
    },
  },
}) => (
  <>
    <PageInfo title={about} paragraph={paragraph} />
    <StyledDescription>
      <p>{paragraphContent}</p>
      <h2>{authorContent}</h2>
    </StyledDescription>
    <StyledImg fluid={fluid} />
  </>
);

export const query = graphql`
  query MyQuery {
    datoCmsAbout {
      about
      paragraph
      paragraphContent
      authorContent
      image {
        fluid(maxWidth: 2500, maxHeight: 1200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
