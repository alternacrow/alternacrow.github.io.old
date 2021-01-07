import React, { FC } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { color } from '../../../assets/styles/colors';

import { GithubDataDataUserGistsEdgesNode } from '../../../types/graphql-types';

type Props = {
  gist?: GithubDataDataUserGistsEdgesNode;
};

export const GistCard: FC<Props> = ({ gist = {} }) => (
  <Container>
    <Description>
      <time>{dayjs(gist?.updatedAt).format('YYYY/MM/DD')}</time>
    </Description>
    <Name>
      <a href={gist?.url}>{gist?.description}</a>
    </Name>
  </Container>
);

const Container = styled.div`
  display: flex;
  padding: 16px 6px;
  border-bottom: 1px solid ${color.border};
`;

const Name = styled.dt`
  margin-left: 8px;
  font-size: 14px;
  color: ${color.secondary};
  a:hover {
    opacity: 0.8;
  }
`;

const Description = styled.dd`
  font-size: 14px;
  color: ${color.gray};
`;
