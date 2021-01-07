import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Data<T> = T & {
  key: string;
};
type Props<T> = {
  data: Data<T>[];
  renderItem: (props: Data<T>, index: number) => ReactElement;
};
type Component = <T>(props: Props<T>) => ReactElement<Props<T>>;

export const HorizontalScroll: Component = ({ data, renderItem }) => (
  <Ul>
    {data.map((item, i) => (
      <Li key={item.key}>{renderItem(item, i)}</Li>
    ))}
  </Ul>
);

const Ul = styled.ul`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-appearance: none;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  flex-shrink: 0;
  -webkit-appearance: none;
`;
