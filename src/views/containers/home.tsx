import React, {FC} from 'react';
import styled from 'styled-components';

import {useUser} from '../../states/user';

const HomeContainer: FC = () => {
  const {user, error} = useUser();

  if (error) return <h1>Error</h1>;

  if (!user) return <h1>Loading</h1>;

  return (
    <Container>
      <FadeInText>{JSON.stringify(user)}</FadeInText>
    </Container>
  );
};

export default HomeContainer;

const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const FadeInText = styled.p`
  font-size: 20px;
  font-weight: bold;
  animation-name: fadein;
  animation-duration: 1s;
  animation-iteration-count: 1;
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
