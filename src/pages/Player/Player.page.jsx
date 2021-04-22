import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideosList from '../../components/RelatedVideosList';

import { Container } from './Player.styles';
import useYoutube from '../../hooks/useYoutube';

function PlayerPage() {
  const history = useHistory();
  if (!useLocation()?.search) {
    history.push('/');
  }

  let {
    search,
    // eslint-disable-next-line prefer-const
    state: { favorite },
  } = useLocation();
  search = search.substring(3, search.length);

  const [loadingVideos, selectedVideos, selectedVideoError] = useYoutube(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=${search}&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  const [loadingRelated, relatedVideos, relatedError] = useYoutube(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${search}&maxResults=1&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`,
    favorite
  );

  return (
    <Container>
      <VideoPlayer
        videoId={search}
        videos={selectedVideos}
        error={selectedVideoError}
        loading={loadingVideos}
      />
      <RelatedVideosList
        videos={relatedVideos}
        error={relatedError}
        loading={loadingRelated}
        favorite={favorite}
      />
    </Container>
  );
}

export default PlayerPage;
