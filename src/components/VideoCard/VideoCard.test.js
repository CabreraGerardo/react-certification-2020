import React from 'react';
import { render, screen } from '@testing-library/react';
import { getTimeLapsed } from '../../utils/fns';
import VideoCard from './index';

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
