import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../services/data/mockData.json';
import RelatedVideosList from './RelatedVideosList.component';

describe('Items are shown correctly', () => {
  test('First item appears on the list', () => {
    const container = render(<RelatedVideosList videos={data} />);

    const videos = data.items.filter((e) => e.id.kind.includes('video'));
    const { id } = videos[0];
    expect(container.getByTestId(id.videoId)).toBeInTheDocument();
  });

  test('Last item appears on the list', () => {
    const container = render(<RelatedVideosList videos={data} />);

    const videos = data.items.filter((e) => e.id.kind.includes('video'));
    const { id } = videos[videos.length - 1];
    expect(container.getByTestId(id.videoId)).toBeInTheDocument();
  });

  test('If error is not null, page should render error message', () => {
    const container = render(<RelatedVideosList error={{ error: 403 }} />);

    expect(container.getByText('Hubo un error al buscar tus videos')).toBeInTheDocument();
  });

  test('If loading is true, render the spinner icon', () => {
    const rendered = TestRenderer.create(<RelatedVideosList loading />);
    const icon = rendered.root.findByType(FontAwesomeIcon);
    expect(icon.props.icon.iconName).toBe('spinner');
  });
});
