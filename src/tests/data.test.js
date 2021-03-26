import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import VideoCardList, { data } from './testing';
import VideoCard from '../components/VideoCard';

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
    render(<VideoCardList />);
    const { items } = data;
    const element = screen.getByTestId(items[0].etag);
    expect(element).toBeInTheDocument();
  });

  test('Test if last element is being rendered', () => {
    render(<VideoCardList />);
    const { items } = data;
    const element = screen.getByTestId(items[items.length - 1].etag);
    expect(element).toBeInTheDocument();
  });

  test('Test if number of elements is correct', () => {
    const rendered = TestRenderer.create(<VideoCardList />);
    const { items } = data;
    const cards = rendered.root.findAllByType(VideoCard);
    expect(cards.length).toEqual(items.length);
  });
});
