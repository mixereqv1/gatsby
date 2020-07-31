import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import { pageData } from '../data/PageData';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';

const ContentWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const ArticlesPage = ({
  data: {
    allMdx: { nodes },
  },
}) => (
  <>
    <PageInfo title='articles' paragraph={pageData.paragraph} />
    <ContentWrapper>
      {nodes.map(({ frontmatter: { title }, excerpt }) => (
        <ArticlePreview title={title} excerpt={excerpt} />
      ))}
    </ContentWrapper>
  </>
);

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default ArticlesPage;
