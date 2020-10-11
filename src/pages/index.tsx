import React, { FC } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../assets/styles';

import Layout from '../components/common/layout';
import SEO from '../components/common/seo';
import { Github } from '../components/home/github';

import { IndexQuery } from '../types/graphql-types';

const IndexPage: FC<PageProps> = () => {
  const data: IndexQuery = useStaticQuery(graphql`
    query Index {
      allGithubData {
        edges {
          node {
            data {
              repositories {
                nodes {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Github
          repositories={
            data.allGithubData.edges[0].node.data?.repositories?.nodes ?? []
          }
        />
      </Container>
    </Layout>
  );
};

export default IndexPage;

const Container = styled.div`
  padding: 32px 16px;
  ${media.sp} {
    padding: 24px 8px;
  }
`;
