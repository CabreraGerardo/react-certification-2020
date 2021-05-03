import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { RelatedVideos } from './RelatedVideosList.styles';
import RelatedVideoCard from '../RelatedVideoCard/RelatedVideoCard.component';

function RelatedVideosList({ videos, error, loading }) {
  let content = <div />;

  if (loading) {
    content = <FontAwesomeIcon icon={faSpinner} />;
  } else if (error) {
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
        {videos?.items
          ?.filter((e) => e.snippet && e.id?.kind?.includes('video'))
          .map(({ id, snippet }) => (
            <RelatedVideoCard
              key={id.videoId}
              title={snippet?.title}
              description={snippet?.description}
              thumbnail={snippet?.thumbnails.medium.url}
              id={id.videoId}
            />
          ))}
      </RelatedVideos>
    );
  }

  return <>{content}</>;
}

export default RelatedVideosList;
