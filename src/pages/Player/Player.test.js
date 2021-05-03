import React from 'react';
import TestRenderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppProvider } from '../../providers/appProvider';
import mockData from '../../services/data/mockData.json';
import { useYoutube } from '../../hooks/useYoutube';
import PlayerPage from './Player.page';
import RelatedVideosList from '../../components/RelatedVideosList';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/Player',
    search: 'test',
    state: { favorite: false },
  }),
}));

jest.mock('../../hooks/useYoutube', () => ({
  useYoutube: jest.fn(),
}));

describe('Check if items render', () => {
  test('Video List Renders when data has items', () => {
    useYoutube.mockReturnValueOnce([false, mockData, null]);
    useYoutube.mockReturnValueOnce([false, mockData, null]);

    const rendered = TestRenderer.create(
      <AppProvider>
        <PlayerPage />
      </AppProvider>
    );

    const list = rendered.root.findByType(RelatedVideosList);

    expect(list?.props?.videos).toEqual(mockData);
  });

  test('Loading is shown when its true', () => {
    useYoutube.mockReturnValueOnce([true, [], null]);
    useYoutube.mockReturnValueOnce([true, [], null]);

    const rendered = TestRenderer.create(
      <AppProvider>
        <PlayerPage />
      </AppProvider>
    );

    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'spinner');
    expect(icon.props.icon.iconName).toBe('spinner');
  });
});
