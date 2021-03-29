import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';

function App() {
  const [search, setSearch] = useState('Wizeline');

  const onSearch = (term) => {
    setSearch(term);
  };

  return (
    <BrowserRouter>
      <Navbar handleNavbarSearch={onSearch} />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage search={search} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
