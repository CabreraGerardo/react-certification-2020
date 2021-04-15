import React from 'react';
import TestRenderer from 'react-test-renderer';
import { AppProvider } from '../../providers/appProvider';
import Layout from './Layout.component';
import { Container } from './Layout.styles';

describe('Item displayed', () => {
  const rendered = TestRenderer.create(
    <AppProvider>
      <Layout />
    </AppProvider>
  );

  test('Layout appears', () => {
    const container = rendered.root.findByType(Container);
    expect(container).toBeTruthy();
  });
});
