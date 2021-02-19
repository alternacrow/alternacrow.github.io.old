import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import { media } from '../assets/styles';

import Layout from '../views/organisms/layouts/layout';
import SEO from '../views/organisms/layouts/seo';

import { HorizontalScrollSample } from '../views/organisms/modules/horizontal-scroll.sample';
import { ModalSample } from '../views/organisms/modules/modal.sample';

const GenericsComponentsPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Components" />
    <Container>
      <ComponentContainer>
        <Title>Horizontal Scroll</Title>
        <HorizontalScrollSample />
      </ComponentContainer>
      <ComponentContainer>
        <Title>Modal</Title>
        <ModalSample />
      </ComponentContainer>
    </Container>
  </Layout>
);

export default GenericsComponentsPage;

const Container = styled.div`
  padding: 32px 16px;
  ${media.sp} {
    padding: 24px 8px;
  }
`;

const ComponentContainer = styled.div`
  & + & {
    margin-top: 12px;
  }
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
`;
