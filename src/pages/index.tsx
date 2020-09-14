import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/common/layout';
import Image from '../components/image';
import SEO from '../components/common/seo';

type Props = PageProps;

const IndexPage: FC<Props> = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Title>alternacrow</Title>

      <p>this is alternacrow homepage</p>
    </Layout>
  );
};

export default IndexPage;

const Title = styled.p`
  font-size: 20px;
`;
