import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VideoLayout, Video, Icon, FavoritesButton } from './VideoPlayer.styles';
import { checkIfFavorite, addToFavorites, removeFromFavorites } from '../../utils/fns';

function VideoPlayer({ videoId, videos, error, loading }) {
  const { player, snippet, id, kind, etag } = videos?.items
    ? videos?.items[0]
    : { player: null, snippet: null, kind: null, id: null };

  const videoTag = parse(player?.embedHtml || '');

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(checkIfFavorite(videoId));
  }, [isFavorite, videoId]);

  const handleFavoriteClick = () => {
    try {
      if (isFavorite) {
        removeFromFavorites(videoId);
      } else {
        const video = {
          etag,
          id: {
            kind,
            videoId: id,
          },
          snippet,
        };
        addToFavorites(video);
      }

      setFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  };

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
