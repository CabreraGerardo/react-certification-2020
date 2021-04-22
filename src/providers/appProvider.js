import React, { useReducer } from 'react';
import reducer from '../state/appReducer';
import { storage } from '../utils/storage';

const AUTH_STORAGE_KEY = 'login_state';

export const themes = {
  dark: {
    navBackground: '#414141',
    bodyBackground: '#313131',
    itemBackground: '#525252',
    fontColor: 'white',
    hoverColor: '#717171',
    shadowColor: '#212121',
    inputColor: '#fefefe',
  },
  light: {
    navBackground: '#8c1b2f',
    bodyBackground: '#ebe1e1',
    itemBackground: '#fefefe',
    fontColor: 'black',
    hoverColor: '#fcdfdf',
    shadowColor: '#cecece',
    inputColor: '#eee',
  },
};

const getSystemTheme = () => {
  let theme = themes.light;

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = themes.dark;
  }

  return theme;
};

export const AppContext = React.createContext({
  theme: themes.dark,
  setTheme: () => {},
  search: 'Wizeline',
  setSearch: () => {},
});

const initial = {
  theme: getSystemTheme(),
  search: 'Wizeline',
  authenticated: Boolean(storage.get(AUTH_STORAGE_KEY)),
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}
