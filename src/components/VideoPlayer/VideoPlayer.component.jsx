import React, { useState } from 'react';
import parse from 'html-react-parser';
import { faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VideoLayout, Video, Icon, FavoritesButton } from './VideoPlayer.styles';
import { checkIfFavorite } from '../../utils/fns';
import { storage } from '../../utils/storage';

function VideoPlayer({ videoId, videos, error, loading }) {
  const { player, snippet } = videos?.items
    ? videos?.items[0]
    : { player: null, snippet: null };

  const videoTag = parse(player?.embedHtml || '');

  const [isFavorite, setFavorite] = useState(checkIfFavorite(videoId));

  const handleFavoriteClick = () => {
    try {
      if (isFavorite) {
        storage.remove(videoId);
      } else {
        storage.set(videoId, videoId);
      }

      setFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  }

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
        <FavoritesButton onClick={handleFavoriteClick}>
          <Icon>
            <FontAwesomeIcon className={isFavorite ? 'active' : ''} icon={faHeart} />
          </Icon>
          <small style={{ marginLeft: '15px' }}>
            {isFavorite ? 'Remove from' : 'Add to'} favorites
          </small>
        </FavoritesButton>
        <small style={{ whiteSpace: 'pre-wrap', padding: '15px' }}>
          {snippet?.description}
        </small>
      </>
    );
  }
  return <VideoLayout>{content}</VideoLayout>;
}

export default VideoPlayer;
