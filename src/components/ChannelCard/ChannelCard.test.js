import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import ResultList from '../ResultsList';
import ChannelCard from './index';

describe('Check Props Integrity', () => {
  test('Props are not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(ChannelCard)[0];
    expect(card.props.title).toBeTruthy();
    expect(card.props.description).toBeTruthy();
    expect(card.props.thumbnail).toBeTruthy();
  });
});

describe('Check if props are being rendered correctly', () => {
  test('Props show in element', () => {
    const title = 'Title';
    const description = 'Description';
    render(<ChannelCard title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
