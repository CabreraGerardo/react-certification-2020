import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Navbar from '../Navbar';
import PlayerPage from '../../pages/Player';

const dark = {
  navBackground: '#414141',
  bodyBackground: '#313131',
  itemBackground: '#525252',
  fontColor: 'white',
};

const Container = styled.div`
  background-color: ${(props) => props.theme.bodyBackground};
`;

function App() {
  const [search, setSearch] = useState('Wizeline');

  const onSearch = (term) => {
    setSearch(term);
  };

  return (
    <ThemeProvider theme={dark}>
      <Container>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
