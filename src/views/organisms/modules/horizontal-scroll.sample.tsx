import React, { FC } from 'react';
import { color } from '../../../assets/styles';

import { HorizontalScroll } from './horizontal-scroll';

export const HorizontalScrollSample: FC = () => {
  const data = [...Array(10)].map((_, i) => ({
    key: `horizontal-scroll ${i}`,
    title: `title ${i + 1}`,
    description: `description ${i + 1}`,
  }));

  return (
    <HorizontalScroll
      data={data}
      renderItem={({ title, description }, i) => (
        <dl
          style={{
            marginLeft: i === 0 ? 0 : 8,
            border: `1px solid ${color.border}`,
            borderRadius: 8,
            height: 100,
            width: 200,
          }}
        >
          <dt>{title}</dt>
          <dd>{description}</dd>
        </dl>
      )}
    />
  );
};
