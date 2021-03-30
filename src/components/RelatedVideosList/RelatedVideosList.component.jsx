import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RelatedVideos } from './RelatedVideosList.styles';
import { getRelatedVideos } from '../../providers/youtube';
import RelatedVideoCard from '../RelatedVideoCard/RelatedVideoCard.component';

function RelatedVideosList() {
  const [videos, setVideos] = useState(null);

  const {
    state: { videoId },
  } = useLocation();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getRelatedVideos(videoId);
        setVideos(data.items);
        console.log(data);
      } catch (e) {
        console.log(e);
        setVideos(null);
      }
    };
    fetchVideo();
  }, [videoId]);

  return (
    <RelatedVideos>
      {videos?.map(
        ({
          id,
          snippet: {
            title,
            description,
            thumbnails: {
              medium: { url },
            },
          },
        }) => (
          <RelatedVideoCard
            key={id.videoId}
            title={title}
            description={description}
            thumbnail={url}
            id={id.videoId}
          />
        )
      )}
    </RelatedVideos>
  );
}

export default RelatedVideosList;
