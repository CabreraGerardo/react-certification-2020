import React from 'react';
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
  return (
    <Video data-testid={id}>
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
