import React from 'react';
import { Card, Text, Thumbnail, Title, Description, Content } from './RelatedVideoCard.styles';

export default function RelatedVideoCard({ title, description, thumbnail, id }) {
  
  return (
    <Card data-testid={id}>
      <Content>
        <Thumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </Content>
    </Card>
  )
}
