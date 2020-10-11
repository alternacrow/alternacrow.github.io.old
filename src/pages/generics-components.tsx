import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import { media } from '../assets/styles';

import Layout from '../components/common/layout';
import SEO from '../components/common/seo';

import { GCHorizontalScroll } from '../components/generics-components/horizontal-scroll';

const GenericsComponentsPage: FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Components" />
      <Container>
        <GCHorizontalScroll />
      </Container>
    </Layout>
  );
};

export default GenericsComponentsPage;

const Container = styled.div`
  padding: 32px 16px;
  ${media.sp} {
    padding: 24px 8px;
  }
`;
