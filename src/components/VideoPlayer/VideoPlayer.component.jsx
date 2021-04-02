import React from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VideoLayout, Video } from './VideoPlayer.styles';
import useYoutube from '../../hooks/useYoutube';

function VideoPlayer() {
  let { search } = useLocation();
  search = search.substring(3, search.length);

  const [loading, videos, error] = useYoutube(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=${search}&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  const { player, snippet } = videos?.items
    ? videos?.items[0]
    : { player: null, snippet: null };

  const videoTag = parse(player?.embedHtml || '');

  let content = <FontAwesomeIcon icon={faSpinner} />;

  if (error) {
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
