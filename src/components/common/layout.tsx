import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './destyle.css';
import './index.css';

import { Header } from './header';
import { Footer } from './footer';

import { LayoutQuery } from '../../types/graphql-types';

const Layout: FC = ({ children }) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      allGithubData {
        nodes {
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
  `);

  return (
    <>
      <Header user={data.allGithubData.nodes[0].data?.user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
