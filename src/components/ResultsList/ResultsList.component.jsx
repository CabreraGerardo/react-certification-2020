import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';

const Header = styled.h1`
  margin-left: 10%;
  text-align: start;
`;

const createCards = (videos, favorites) => {
  const channelList = videos
    ?.filter((e) => e.id.kind.includes('channel'))
    .map((video) => {
      const {
        snippet: { title, description, thumbnails },
      } = video;

      return (
        <ChannelCard
          id={video.id.channelId}
          title={title}
          description={description}
          thumbnail={thumbnails.medium.url}
          key={video.etag}
        />
      );
    });

  const videoList = videos
    ?.filter((e) => e.id.kind.includes('video'))
    .map((video) => {
      const {
        snippet: { title, description, thumbnails, publishedAt, channelTitle },
      } = video;

      return (
        <VideoCard
          id={video.id.videoId}
          title={title}
          description={description}
          thumbnail={thumbnails.medium.url}
          date={publishedAt}
          channel={channelTitle}
          key={video.etag}
          favorite={favorites}
        />
      );
    });

  return [channelList, videoList];
};

function ResultList({ videos, favorites }) {
  const [channelList, videoList] = createCards(videos, favorites);

  return (
    <div style={{ width: '100vw' }}>
      {channelList?.length > 0 ? (
        <>
          <Header>Channels</Header>
          <div>{channelList}</div>
          <hr />
        </>
      ) : (
        <></>
      )}
      {videoList?.length > 0 ? (
        <>
          <Header>Videos</Header>
          <div>{videoList}</div>
        </>
      ) : (
        <></>
      )}
      {channelList?.length <= 0 && videoList?.length <= 0 ? (
        <>
          <Header>No Results</Header>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ResultList;
