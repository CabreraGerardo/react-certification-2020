import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { getTimeLapsed } from '../../utils/fns';

import ResultList from '../ResultsList';
import VideoCard from './index';

describe('Check Props Integrity', () => {
  test('Props are not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(VideoCard)[0];
    expect(card.props.title).toBeTruthy();
    expect(card.props.description).toBeTruthy();
    expect(card.props.thumbnail).toBeTruthy();
    expect(card.props.date).toBeTruthy();
    expect(card.props.channel).toBeTruthy();
  });
});

describe('Check if props are being rendered correctly', () => {
  test('Props show in element', () => {
    const title = 'Title';
    const description = 'Description';
    const channel = 'Channel';
    render(
      <VideoCard
        title={title}
        description={description}
        date={new Date()}
        channel={channel}
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(getTimeLapsed(new Date()))).toBeInTheDocument();
    expect(screen.getByText(`By ${channel}`)).toBeInTheDocument();
  });
});
