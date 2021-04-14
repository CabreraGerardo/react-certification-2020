import React, { useState } from 'react';

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

export const ThemeContext = React.createContext({
  theme: themes.dark,
  setTheme: () => {},
});

export function ModeProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}
