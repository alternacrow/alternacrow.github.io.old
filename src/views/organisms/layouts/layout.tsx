import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import '../../../assets/styles/destyle.css';
import '../../../assets/styles/index.css';

import { Header } from './header';
import { Footer } from './footer';

import { LayoutQuery } from '../../../types/graphql-types';

const Layout: FC = ({ children }) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      githubData {
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
  `);

  return (
    <>
      <Header user={data.githubData?.data?.user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
