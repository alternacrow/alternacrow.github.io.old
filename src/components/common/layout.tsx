import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import '../../assets/styles/destyle.css';
import '../../assets/styles/index.css';

import { Header } from './header';
import { Footer } from './footer';

import { LayoutQuery } from '../../types/graphql-types';

const Layout: FC = ({ children }) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      allGithubData {
        edges {
          node {
            data {
              user {
                login
                bio
                avatarUrl
                email
                twitterUsername
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Header user={data.allGithubData.edges[0].node.data?.user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
