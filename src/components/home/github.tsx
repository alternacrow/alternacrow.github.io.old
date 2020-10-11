import React, { FC } from 'react';
import styled from 'styled-components';
import { media } from '../../assets/styles/media';
import { color } from '../../assets/styles/colors';

import { GithubDataDataRepositories } from '../../types/graphql-types';

type Props = {
  repositories?: GithubDataDataRepositories['nodes'];
};

export const Github: FC<Props> = ({ repositories = [] }) => {
  return (
    <Container>
      <Title>Github</Title>
      <Repositories>
        {repositories.map(repository => (
          <Card key={repository?.id}>
            <a href={repository?.url} rel="noopener noreferrer" target="_blank">
              <Name>{repository?.name}</Name>
            </a>
            <Description>- {repository?.description}</Description>
          </Card>
        ))}
      </Repositories>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  ${media.sp} {
    margin-left: 4px;
  }
`;

const Repositories = styled.dl`
  margin-top: 20px;
  ${media.sp} {
    margin-top: 16px;
  }
`;

const Card = styled.div`
  border-bottom: 1px solid ${color.border};
  padding: 10px 4px;
`;

const Name = styled.dt`
  font-size: 16px;
  color: ${color.primary};
  &:hover {
    opacity: 0.8;
  }
`;

const Description = styled.dd`
  margin-top: 6px;
  display: inline-block;
  font-size: 14px;
`;
