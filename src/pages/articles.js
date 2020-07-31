import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import { pageData } from '../data/PageData';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import slugify from 'slugify';

const ContentWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-bottom: 50px;
`;

const ArticlesPage = ({
  data: {
    allDatoCmsArticle: { nodes },
  },
}) => (
  <>
    <PageInfo title='articles' paragraph={pageData.paragraph} />
    <ContentWrapper>
      {nodes.map(({ title, featuredImage: { fluid }, meta: { createdAt } }) => (
        <ArticlePreview
          key={title}
          title={title}
          fluid={fluid}
          slug={slugify(title, { lower: true })}
          createdAt={createdAt}
        />
      ))}
    </ContentWrapper>
  </>
);

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        author
        meta {
          createdAt(fromNow: true)
        }
        featuredImage {
          url
          fluid(maxWidth: 390, maxHeight: 240) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
