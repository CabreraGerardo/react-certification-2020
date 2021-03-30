import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideosList from '../../components/RelatedVideosList';

import { Container } from './Player.styles';

function PlayerPage() {
  return (
    <Container>
      <VideoPlayer />
      <RelatedVideosList />
    </Container>
  );
}

export default PlayerPage;
