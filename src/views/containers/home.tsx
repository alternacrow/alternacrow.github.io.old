import React, {FC} from 'react';

import {useUser} from '../../states/user';

const HomeContainer: FC = () => {
  const {user, error} = useUser();

  if (error) return <h1>Error</h1>;

  return <div>{JSON.stringify(user)}</div>;
};

export default HomeContainer;
