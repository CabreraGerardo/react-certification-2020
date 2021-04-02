import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { getVideo } from '../../providers/youtube';
import { VideoLayout, Video } from './VideoPlayer.styles';

function VideoPlayer() {
  const [player, setPlayer] = useState(null);
  const [video, setVideo] = useState(null);

  const {
    state: { videoId },
  } = useLocation();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideo(videoId);
        setPlayer(data.items[0].player);
        setVideo(data.items[0].snippet);
      } catch (e) {
        console.log(e);
        setPlayer(null);
        setVideo(null);
      }
    };
    fetchVideo();
  }, [videoId]);

  console.log(video);
  const videoTag = parse(player?.embedHtml || '');
  return (
    <VideoLayout>
      <Video>{videoTag}</Video>
      <h1>{video?.title}</h1>
      <small style={{ whiteSpace: 'pre-wrap', padding: '15px' }}>
        {video?.description}
      </small>
    </VideoLayout>
  );
}

export default VideoPlayer;
