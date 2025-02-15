import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Navbar from '../Navbar';
import PlayerPage from '../../pages/Player';
import { AppContext } from '../../providers/appProvider';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private/Private.component';

const Container = styled.div`
  background-color: ${(props) => props.theme.bodyBackground};
  transition: 200ms;
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const {
    state: { theme },
  } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/player">
                <PlayerPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
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
