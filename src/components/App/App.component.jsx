import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Navbar from '../Navbar';
import PlayerPage from '../../pages/Player';

function App() {
  const [search, setSearch] = useState('Wizeline');

  const onSearch = (term) => {
    setSearch(term);
  };

  return (
    <BrowserRouter>
      <Navbar handleNavbarSearch={onSearch} />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage search={search} />
          </Route>
          <Route exact path="/player">
            <PlayerPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
