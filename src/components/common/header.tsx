import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../assets/styles/media';
import { colors } from '../../assets/styles/colors';

import { FontAwesome } from './atoms/images/fontawesome';

import { GithubDataDataUser } from '../../types/graphql-types';

type Props = {
  user?: GithubDataDataUser;
};

export const Header: FC<Props> = ({ user = {} }) => {
  return (
    <Container>
      <Left>
        <Link to="/">
          <Title>{user.login}</Title>
          <Avater src={user?.avatarUrl} alt={user?.login} />
          <Bio>{user?.bio}</Bio>
        </Link>
      </Left>
      <Right>
        <SNSIcon href={user?.url}>
          <FontAwesome type="github" size={24} />
        </SNSIcon>
        <SNSIcon href={`https://twitter.com/${user?.twitterUsername}`}>
          <FontAwesome type="twitter" size={24} />
        </SNSIcon>
        <SNSIcon href={`mailto:${user?.email}`}>
          <FontAwesome type="envelope-o" size={20} />
        </SNSIcon>
      </Right>
    </Container>
  );
};

const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  ${media.sp} {
    height: auto;
    padding: 16px 48px;
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  align-items: center;
  ${media.sp} {
    text-align: center;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  ${media.sp} {
    margin-top: 16px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  color: ${colors.black};
  ${media.sp} {
    margin-left: 1.5em;
  }
`;

const Bio = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${colors.black};
`;

const Avater = styled.img`
  margin-left: 4px;
`;

const SNSIcon = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  margin-left: 12px;
  color: ${colors.black};
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    color: ${colors.primary};
    transition: color 0.15s ease-in-out;
  }
`;
