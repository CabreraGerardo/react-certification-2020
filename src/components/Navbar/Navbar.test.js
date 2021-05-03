import React from 'react';
import TestRenderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar.component';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
  }),
}));

describe('Icons are displayed', () => {
  test('Home icon appears', () => {
    const rendered = TestRenderer.create(<Navbar />);
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'home');
    expect(icon.props.icon.iconName).toBe('home');
  });

  test('Favorites icon appears', () => {
    const rendered = TestRenderer.create(<Navbar />);
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'heart');
    expect(icon.props.icon.iconName).toBe('heart');
  });

  test('Log in icon appears', () => {
    const rendered = TestRenderer.create(<Navbar />);
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'sign-in-alt');
    expect(icon.props.icon.iconName).toBe('sign-in-alt');
  });

  test('Theme icon appears', () => {
    const rendered = TestRenderer.create(<Navbar />);
    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'moon');
    expect(icon.props.icon.iconName).toBe('moon');
  });
});
