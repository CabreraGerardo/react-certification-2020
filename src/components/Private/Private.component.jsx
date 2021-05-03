import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../providers/appProvider';

function Private({ children, ...rest }) {
  const {
    state: { authenticated },
  } = useContext(AppContext);

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
