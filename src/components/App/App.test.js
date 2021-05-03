import React from 'react';
import TestRenderer from 'react-test-renderer';
import HomePage from '../../pages/Home';
import { AppProvider } from '../../providers/appProvider';
import App from './App.component';
import mockData from '../../services/data/mockData.json';
import { useYoutube } from '../../hooks/useYoutube';

jest.mock('../../hooks/useYoutube', () => ({
  useYoutube: jest.fn(),
}));

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node) => node,
  };
});

describe('Check if items render', () => {
  test('Homepage Renders by default', () => {
    useYoutube.mockReturnValueOnce([false, mockData, null]);

    const rendered = TestRenderer.create(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const home = rendered.root.findAllByType(HomePage);

    expect(home.length).toBeGreaterThan(0);
  });
});
