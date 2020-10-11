import React, { FC } from 'react';
import { color } from '../../assets/styles';

import { Container } from './_container';
import { HorizontalScroll } from '../common/molecules/horizontal-scroll';

export const GCHorizontalScroll: FC = () => {
  const data = [...Array(10)].map((_, i) => ({
    key: `horizontal-scroll ${i}`,
    title: `title ${i + 1}`,
    description: `description ${i + 1}`,
  }));

  return (
    <Container title="Horizontal Scroll">
      <HorizontalScroll
        data={data}
        renderItem={({ title, description }, i) => (
          <dl>
            <div
              style={{
                marginLeft: i === 0 ? 0 : '8px',
                border: `1px solid ${color.border}`,
                borderRadius: '8px',
                height: '100px',
                width: '200px',
              }}
            >
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          </dl>
        )}
      />
    </Container>
  );
};
