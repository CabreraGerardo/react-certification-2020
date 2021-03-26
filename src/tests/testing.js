import React from 'react';
import VideoCard from '../components/VideoCard';

import videos from '../providers/data/mockData.json';

export const data = videos;

const videoList = videos.items.map((video) => {
  const {
    snippet: { title, description, thumbnails },
  } = video;
  return (
    <div data-testid={video.etag} key={video.etag}>
      <VideoCard
        title={title}
        description={description}
        thumbnail={thumbnails.medium.url}
        key={video.etag}
      />
    </div>
  );
});

function VideoCardList() {
  return <div>{videoList}</div>;
}

export default VideoCardList;
