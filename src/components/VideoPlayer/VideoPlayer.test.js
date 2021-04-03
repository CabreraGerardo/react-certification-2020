import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoPlayer from './VideoPlayer.component';
import data from '../../providers/data/mockData.json';

describe('Props are shown correctly', () => {
  test('Props should appear on the page', () => {
    const container = render(<VideoPlayer videos={data} />);

    const { snippet } = data?.items ? data?.items[0] : { snippet: null };

    expect(container.getByText(snippet.title)).toBeInTheDocument();
    expect(container.getByText(snippet.description)).toBeInTheDocument();
  });

  test('If error is not null, page should render error message', () => {
    const container = render(<VideoPlayer error={{ error: 403 }} />);

    expect(container.getByText('Hubo un error al buscar tus videos')).toBeInTheDocument();
  });

  test('If loading is true, render the spinner icon', () => {
    const rendered = TestRenderer.create(<VideoPlayer loading />);
    const icon = rendered.root.findByType(FontAwesomeIcon);
    expect(icon.props.icon.iconName).toBe('spinner');
  });
});
