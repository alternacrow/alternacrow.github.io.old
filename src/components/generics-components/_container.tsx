import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

export const Container: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;
