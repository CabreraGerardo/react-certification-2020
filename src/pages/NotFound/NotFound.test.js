import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import NotFoundPage from './NotFound.page';

describe('Item displayed', () => {
  const rendered = TestRenderer.create(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );

  test('Layout appears', () => {
    const container = rendered.root.findByType(Link);
    expect(container).toBeTruthy();
  });
});
