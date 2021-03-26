import React from 'react';
import VideoCard from '../VideoCard';

import videos from '../../providers/data/mockData.json';

const videoList = videos.items.map((video) => {
  const {
    snippet: { title, description, thumbnails },
  } = video;
  return (
    <VideoCard
      title={title}
      description={description}
      thumbnail={thumbnails.medium.url}
      key={video.etag}
    />
  );
});

function VideoCardList() {
  return <div>{videoList}</div>;
}

export default VideoCardList;
