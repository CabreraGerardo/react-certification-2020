import React from 'react';
import TestRenderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar.component';
import { AppContext, AppProvider, themes } from '../../providers/appProvider';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
  }),
}));

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node) => node,
  };
});

describe('Icons are displayed', () => {
  let rendered = TestRenderer.create(
    <AppProvider>
      <Navbar />
    </AppProvider>
  );

  test('Home icon appears', () => {
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'home');
    expect(icon.props.icon.iconName).toBe('home');
  });

  test('Favorites icon appears if authenticated', () => {
    rendered = TestRenderer.create(
      <AppContext.Provider value={{ state: { authenticated: true, theme: themes.dark } }}>
        <Navbar />
      </AppContext.Provider>
    );

    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'heart');
    expect(icon.props.icon.iconName).toBe('heart');
  });

  test('Favorites icon disappears if authenticated', () => {
    rendered = TestRenderer.create(
      <AppContext.Provider
        value={{ state: { authenticated: false, theme: themes.dark } }}
      >
        <Navbar />
      </AppContext.Provider>
    );

    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'heart');
    expect(icon).toBeFalsy();
  });

  test('Log in icon appears if not authenticated', () => {
    rendered = TestRenderer.create(
      <AppContext.Provider
        value={{ state: { authenticated: false, theme: themes.dark } }}
      >
        <Navbar />
      </AppContext.Provider>
    );
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'sign-in-alt');
    expect(icon.props.icon.iconName).toBe('sign-in-alt');
  });

  test('Log out icon appears if authenticated', () => {
    rendered = TestRenderer.create(
      <AppContext.Provider value={{ state: { authenticated: true, theme: themes.dark } }}>
        <Navbar />
      </AppContext.Provider>
    );
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'sign-out-alt');
    expect(icon.props.icon.iconName).toBe('sign-out-alt');
  });

  test('Theme icon appears', () => {
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'moon');
    expect(icon.props.icon.iconName).toBe('moon');
  });
});
