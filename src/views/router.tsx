import React, {FC} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import HomeContainer from './containers/home';

const Router: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
