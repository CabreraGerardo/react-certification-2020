import React from 'react';
import parse from 'html-react-parser';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VideoLayout, Video } from './VideoPlayer.styles';

function VideoPlayer({ videos, error, loading }) {
  const { player, snippet } = videos?.items
    ? videos?.items[0]
    : { player: null, snippet: null };

  const videoTag = parse(player?.embedHtml || '');

  let content = <div />;

  if (loading) {
    content = <FontAwesomeIcon icon={faSpinner} />;
  } else if (error) {
    content = <h1>Hubo un error al buscar tus videos</h1>;
  } else if (!loading && videos?.items && !error) {
    content = (
      <>
        <Video>{videoTag}</Video>
        <h1>{snippet?.title}</h1>
        <small style={{ whiteSpace: 'pre-wrap', padding: '15px' }}>
          {snippet?.description}
        </small>
      </>
    );
  }
  return <VideoLayout>{content}</VideoLayout>;
}

export default VideoPlayer;
