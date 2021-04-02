import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideosList from '../../components/RelatedVideosList';

import { Container } from './Player.styles';

function PlayerPage() {
  const history = useHistory();
  if (!useLocation()?.search) {
    history.push('/');
  }

  return (
    <Container>
      <VideoPlayer />
      <RelatedVideosList />
    </Container>
  );
}

export default PlayerPage;
