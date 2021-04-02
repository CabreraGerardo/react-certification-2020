import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedVideoCard from './RelatedVideoCard.component';

describe('Check if props are being rendered correctly', () => {
  test('Props show in element', () => {
    const title = 'Title';
    const description = 'Description';
    render(<RelatedVideoCard title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
