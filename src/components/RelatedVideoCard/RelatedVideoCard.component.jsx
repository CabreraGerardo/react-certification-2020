import React from 'react';
import { useHistory } from 'react-router';
import {
  Card,
  Text,
  Thumbnail,
  Title,
  Description,
  Content,
} from './RelatedVideoCard.styles';

const RelatedVideoCard = ({ title, description, thumbnail, id }) => {
  const history = useHistory();

  const goToVideo = async (videoId) => {
    history.push({
      pathname: '/player',
      state: { videoId },
    });
  };

  return (
    <Card data-testid={id} onClick={() => goToVideo(id)}>
      <Content>
        <Thumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </Content>
    </Card>
  );
};

export default RelatedVideoCard;
