import React, { FC, CSSProperties } from 'react';
import styled from 'styled-components';

type Type = 'github' | 'twitter' | 'envelope-o';

type Props = {
  type: Type;
  size?: number;
  style?: CSSProperties;
};

export const FontAwesome: FC<Props> = ({ type, size = 32, style = {} }) => {
  return (
    <Icon style={style} className={`fa fa-${type}`} size={size} type={type} />
  );
};

const Icon = styled.i<{ size: number; type: Type }>`
  font-size: ${({ size }) => size}px;
`;
