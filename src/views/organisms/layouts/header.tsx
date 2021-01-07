import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media, vw, color } from '../../../assets/styles';

import { FontAwesome } from '../../atoms/icons/fontawesome';

import { GithubDataDataUser } from '../../../types/graphql-types';

type Props = {
  user?: GithubDataDataUser;
};

export const Header: FC<Props> = ({ user = {} }) => (
  <Container>
    <Left>
      <Link to="/">
        <Title>{user.login}</Title>
        <Avater src={user?.avatarUrl} alt={user?.login} />
        <Bio>{user?.bio}</Bio>
      </Link>
    </Left>
    <Right>
      <SNSLink href={user?.url}>
        <GithubIcon />
      </SNSLink>
      <SNSLink href={`https://twitter.com/${user?.twitterUsername}`}>
        <TwitterIcon />
      </SNSLink>
      <SNSLink href={`mailto:${user?.email}`}>
        <EmailIcon />
      </SNSLink>
    </Right>
  </Container>
);

const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  ${media.sp} {
    height: auto;
    padding: ${vw(16)} ${vw(8)};
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.h1`
  align-items: center;
  ${media.sp} {
    text-align: center;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  ${media.sp} {
    margin-top: 20px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  color: ${color.black};
  ${media.sp} {
    margin-left: 1.5em;
  }
`;

const Bio = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${color.black};
`;

const Avater = styled.img`
  margin-left: 4px;
`;

const SNSLink = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  margin-left: 12px;
  color: ${color.black};
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    color: ${color.primary};
    transition: color 0.15s ease-in-out;
  }
`;

const GithubIcon = styled(FontAwesome).attrs({
  type: 'github',
})`
  font-size: 24px;
`;

const TwitterIcon = styled(FontAwesome).attrs({
  type: 'twitter',
})`
  font-size: 24px;
`;

const EmailIcon = styled(FontAwesome).attrs({
  type: 'email',
})`
  font-size: 20px;
`;
