import React, { FC, useMemo } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import { IndexQuery } from '../types/graphql-types';

import { Home } from '../views/templates/home';

const IndexPage: FC<PageProps> = () => {
  const data: IndexQuery = useStaticQuery(graphql`
    query Index {
      allGithubData {
        edges {
          node {
            data {
              user {
                login
                url
                gists {
                  edges {
                    node {
                      id
                      name
                      description
                      url
                      createdAt
                      updatedAt
                    }
                  }
                }
              }
              repositories {
                nodes {
                  id
                  name
                  description
                  url
                  homepageUrl
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);

  const gists = useMemo(
    () =>
      data.allGithubData.edges[0].node.data?.user?.gists?.edges?.map(
        edge => edge?.node,
      ) ?? [],
    [data.allGithubData.edges],
  );

  return (
    <Home
      githubUrl={data.allGithubData.edges[0].node.data?.user?.url}
      gistUrl={`https://gist.github.com/${data.allGithubData.edges[0].node.data?.user?.login}`}
      repositories={data.allGithubData.edges[0].node.data?.repositories?.nodes}
      gists={gists}
    />
  );
};

export default IndexPage;
