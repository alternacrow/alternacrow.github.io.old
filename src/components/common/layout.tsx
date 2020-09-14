import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import './destyle.css';
import './index.css';

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header>
        {/**
         *
         */}
      </Header>
      <main>{children}</main>
      <Footer>
        <p>© 2020 alternacrow</p>
      </Footer>
    </>
  );
};

export default Layout;

const Header = styled.header`
  border-bottom: 1px solid #eeeeee;
`;

const Footer = styled.header`
  text-align: center;
  font-size: 14px;
  color: #cccccc;
`;
