import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../assets/styles/colors';

import { products } from '../../../constants';

import Image from '../../atoms/images/image';

type Props = {
  product: typeof products[number];
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Container href={product.url}>
      <Name>
        <Icon filename={product.icon} />
        {product.name}
      </Name>
      <Description>{product.description}</Description>
    </Container>
  );
};

const Container = styled.a`
  display: block;
  &:hover {
    picture {
      opacity: 0.8;
    }
    dt {
      color: ${color.linkhover};
    }
  }
`;

const Name = styled.dt`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: normal;
  color: ${color.secondary};
`;

const Icon = styled(Image)`
  margin-right: 6px;
  border-radius: 4px;
  width: 28px;
  height: 28px;
`;

const Description = styled.dd`
  margin-top: 6px;
  font-size: 14px;
  color: ${color.note};
`;
