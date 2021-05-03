import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResultList from '../../components/ResultsList';
import { AppProvider } from '../../providers/appProvider';
import HomePage from './Home.page';
import mockData from '../../services/data/mockData.json';
import { useYoutube } from '../../hooks/useYoutube';

jest.mock('../../hooks/useYoutube', () => ({
  useYoutube: jest.fn(),
}));

describe('Check if items render', () => {
  test('Video List Renders when data has items', () => {
    useYoutube.mockReturnValueOnce([false, mockData, null]);

    const rendered = TestRenderer.create(
      <AppProvider>
        <HomePage />
      </AppProvider>
    );

    const list = rendered.root.findByType(ResultList);

    expect(list?.props?.videos).toEqual(mockData.items);
  });

  test('Video List does not Render when data has no items', () => {
    useYoutube.mockReturnValueOnce([false, [], null]);

    const rendered = TestRenderer.create(
      <AppProvider>
        <HomePage />
      </AppProvider>
    );

    const list = rendered.root.findAllByType(ResultList);

    expect(list).toEqual([]);
  });

  test('Loading is shown when its true', () => {
    useYoutube.mockReturnValueOnce([true, [], null]);

    const rendered = TestRenderer.create(
      <AppProvider>
        <HomePage />
      </AppProvider>
    );

    const icon = rendered.root
      .findAllByType(FontAwesomeIcon)
      .find((e) => e.props.icon.iconName === 'spinner');
    expect(icon.props.icon.iconName).toBe('spinner');
  });

  test('Error shows if exists', () => {
    useYoutube.mockReturnValueOnce([false, [], { message: 'Error' }]);

    render(
      <AppProvider>
        <HomePage />
      </AppProvider>
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
