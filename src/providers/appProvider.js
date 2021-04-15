import React, { useReducer } from 'react';
import reducer from '../state/appReducer';

export const themes = {
  dark: {
    navBackground: '#414141',
    bodyBackground: '#313131',
    itemBackground: '#525252',
    fontColor: 'white',
    hoverColor: '#717171',
    shadowColor: '#212121',
  },
  light: {
    navBackground: '#8c1b2f',
    bodyBackground: '#ebe1e1',
    itemBackground: '#fefefe',
    fontColor: 'black',
    hoverColor: '#fcdfdf',
    shadowColor: '#cecece',
  },
};

export const AppContext = React.createContext({
  theme: themes.dark,
  setTheme: () => {},
  search: 'Wizeline',
  setSearch: () => {},
});
const initial = {
  theme: themes.dark,
  search: 'Wizeline',
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}
