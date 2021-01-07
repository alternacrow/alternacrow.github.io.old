import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../assets/styles/colors';

import { FontAwesome } from '../../atoms/icons/fontawesome';
import { ExternalLink } from '../../atoms/links/external';

import { GithubDataRawResultDataRepositoriesNodes } from '../../../types/graphql-types';

type Props = {
  repository?: GithubDataRawResultDataRepositoriesNodes;
};

export const RepositoryCard: FC<Props> = ({ repository = {} }) => (
  <Container key={repository.id}>
    <Name>
      <ExternalLink href={repository.url}>{repository.name}</ExternalLink>
      {repository.homepageUrl ? (
        <ExternalLink href={repository.homepageUrl}>
          <HomePageIcon />
        </ExternalLink>
      ) : null}
    </Name>
    <Description>
      <p>{repository.description}</p>
    </Description>
  </Container>
);

const Container = styled.div`
  border-bottom: 1px solid ${color.border};
  padding: 12px 6px;
`;

const Name = styled.dt`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  color: ${color.secondary};

  a {
    color: ${color.link};
    &:hover {
      color: ${color.linkhover};
    }
  }

  a + a {
    margin-left: 8px;
  }
`;

const HomePageIcon = styled(FontAwesome).attrs({
  type: 'home',
})`
  font-size: 18px;
`;

const Description = styled.dd`
  margin-top: 8px;
  font-size: 14px;
`;
