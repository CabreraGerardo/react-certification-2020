import React from 'react';
import { useHistory } from 'react-router';
import { getTimeLapsed } from '../../utils/fns';
import {
  Description,
  Image,
  Text,
  Title,
  Video,
  PublishedDate,
  Channel,
} from './VideoCard.styles';

function VideoCard({ id, title, description, thumbnail, date, channel }) {
  const history = useHistory();

  const goToVideo = async (videoId) => {
    history.push({
      pathname: '/player',
      state: { videoId },
      search: `?v=${videoId}`,
    });
  };

  return (
    <Video data-testid={id} onClick={() => goToVideo(id)}>
      <Image style={{ backgroundImage: `url(${thumbnail})` }} />
      <Text>
        <Title>{title}</Title>
        <Channel>By {channel}</Channel>
        <Description>{description}</Description>
        <PublishedDate>{getTimeLapsed(date)}</PublishedDate>
      </Text>
    </Video>
  );
}

export default VideoCard;
