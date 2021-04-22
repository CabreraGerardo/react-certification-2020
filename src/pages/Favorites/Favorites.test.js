import React from 'react';
import TestRenderer from 'react-test-renderer';
import { AppProvider } from '../../providers/appProvider';
import FavoritesPage from './Favorites.page';
import ResultList from '../../components/ResultsList';
import { storage } from '../../utils/storage';

describe('Check if items render', () => {
  test('Video List Renders when data has items', () => {
    const rendered = TestRenderer.create(
      <AppProvider>
        <FavoritesPage />
      </AppProvider>
    );

    const list = rendered.root.findByType(ResultList);

    expect(list?.props?.videos).toEqual(storage.get('favorites') || []);
  });
});
