import React, { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => {
  return (
    <Container>
      <CopyRight>© 2020 alternacrow</CopyRight>
    </Container>
  );
};

const Container = styled.footer`
  padding: 4px 0;
`;

const CopyRight = styled.p`
  font-size: 14px;
  color: #cccccc;
  text-align: center;
`;
