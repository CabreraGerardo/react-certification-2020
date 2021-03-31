/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';
import { searchByKeyword } from '../../providers/youtube';

const Header = styled.h1`
  margin-left: 10%;
  text-align: start;
`;

const createCards = (videos) => {
  const channelList = videos
    .filter((e) => e.id.kind.includes('channel'))
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
    .filter((e) => e.id.kind.includes('video'))
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
        />
      );
    });

  return [channelList, videoList];
};

function ResultList({ search }) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await searchByKeyword(search);
        setLoading(false);
        setVideos(data.items);
      } catch (e) {
        console.log(e);
        setVideos([]);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [search]);

  const [channelList, videoList] = createCards(videos);

  return (
    <div>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} />
      ) : channelList?.length > 0 || videoList?.length > 0 ? (
        <>
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
        </>
      ) : (
        <h1 style={{ margin: '58px' }}>
          Please, search for something on the search bar at the top left
        </h1>
      )}
    </div>
  );
}

export default ResultList;
