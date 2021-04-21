import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Navbar from '../Navbar';
import PlayerPage from '../../pages/Player';
import { AppContext } from '../../providers/appProvider';
import AuthProvider from '../../providers/authProvider';
import FavoritesPage from '../../pages/Favorites';

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
      <AuthProvider>
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
                <Route exact path="/favorites">
                  <FavoritesPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </BrowserRouter>
        </Container>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
