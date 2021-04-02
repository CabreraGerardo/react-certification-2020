import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { RelatedVideos } from './RelatedVideosList.styles';
import RelatedVideoCard from '../RelatedVideoCard/RelatedVideoCard.component';
import useYoutube from '../../hooks/useYoutube';

function RelatedVideosList() {
  let { search } = useLocation();
  search = search.substring(3, search.length);
  const [loading, videos, error] = useYoutube(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${search}&maxResults=5&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  let content = <FontAwesomeIcon icon={faSpinner} />;

  if (error) {
    content = <h1>Hubo un error al buscar tus videos</h1>;
  } else if (!videos?.items) {
    content = (
      <h1 style={{ margin: '58px' }}>
        Please, search for something on the search bar at the top left
      </h1>
    );
  } else if (!loading && videos?.items && !error) {
    content = (
      <RelatedVideos>
        {videos?.items?.map(
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

  return <>{content}</>;
}

export default RelatedVideosList;
