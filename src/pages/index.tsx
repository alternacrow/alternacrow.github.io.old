import React, { FC, useMemo } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import { IndexQuery } from '../types/graphql-types';

import { Home } from '../views/templates/home';

const IndexPage: FC<PageProps> = () => {
  const data: IndexQuery = useStaticQuery(graphql`
    query Index {
      githubData {
        data {
          user {
            login
            url
            repositories {
              nodes {
                id
                name
                description
                url
                homepageUrl
              }
            }
            gists {
              nodes {
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
      }
    }
  `);

  return (
    <Home
      githubUrl={data.githubData?.data?.user?.url}
      gistUrl={`https://gist.github.com/${data.githubData?.data?.user?.login}`}
      repositories={data.githubData?.data?.user?.repositories?.nodes}
      gists={data.githubData?.data?.user?.gists?.nodes}
    />
  );
};

export default IndexPage;
