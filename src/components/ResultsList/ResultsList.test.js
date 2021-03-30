import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import ResultList from './index';
import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';

import data from '../../providers/data/mockData.json';

describe('Testing if data is valid', () => {
  test('Mock data import is not null undefined', () => {
    expect(data).not.toBe(null || undefined);
  });

  test('Mock data contains items', () => {
    const { items } = data;
    expect(items.length).toBeGreaterThanOrEqual(1);
  });
});

describe('Testing if data renders correctly', () => {
  test('Test if first element is being rendered', () => {
    render(<ResultList />);
    const { items } = data;
    const element = screen.getByTestId(
      items.id.kind.includes('channel') ? items[0].id.channelId : items[0].id.videoId
    );
    expect(element).toBeInTheDocument();
  });

  test('Test if last element is being rendered', () => {
    render(<ResultList />);
    const { items } = data;
    const element = screen.getByTestId(
      items[items.length - 1].id.kind.includes('channel')
        ? items[items.length - 1].id.channelId
        : items[items.length - 1].id.videoId
    );
    expect(element).toBeInTheDocument();
  });

  test('Test if number of videos is correct', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const { items } = data;
    const cards = rendered.root.findAllByType(VideoCard);
    expect(cards.length).toEqual(items.filter((e) => e.id.kind.includes('video')).length);
  });

  test('Test if number of channels is correct', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const { items } = data;
    const cards = rendered.root.findAllByType(ChannelCard);
    expect(cards.length).toEqual(
      items.filter((e) => e.id.kind.includes('channel')).length
    );
  });
});
