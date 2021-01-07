import React, { FC } from 'react';
import styled from 'styled-components';
import { media, vw } from '../../../assets/styles/media';

export const Footer: FC = () => (
  <Container>
    <CopyRight>© 2020 alternacrow</CopyRight>
  </Container>
);

const Container = styled.footer`
  padding: 24px 16px;
  ${media.sp} {
    padding: ${vw(16)} ${vw(8)};
  }
`;

const CopyRight = styled.p`
  font-size: 14px;
  color: #cccccc;
  text-align: center;
`;
