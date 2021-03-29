/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';

const Header = styled.h1`
  margin: 0px 100px;
  text-align: start;
`;

let videoList = [];
let channelList = [];

function ResultList({ search }) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}%20Academy&key=AIzaSyCYebr8sO8pXiFu4JLVrgN1-ojkG5cqQ1E`
        ).catch(console.error);
        setLoading(false);
        const vid = await res.json();
        setVideos(vid.items);
      } catch (e) {
        console.log(e);
        setVideos([]);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [search]);

  channelList = videos
    .filter((e) => e.id.kind.includes('channel'))
    .map((video) => {
      const {
        snippet: { title, description, thumbnails },
      } = video;

      return (
        <ChannelCard
          id={video.etag}
          title={title}
          description={description}
          thumbnail={thumbnails.medium.url}
          key={video.etag}
        />
      );
    });

  videoList = videos
    .filter((e) => e.id.kind.includes('video'))
    .map((video) => {
      const {
        snippet: { title, description, thumbnails, publishedAt, channelTitle },
      } = video;

      return (
        <VideoCard
          id={video.etag}
          title={title}
          description={description}
          thumbnail={thumbnails.medium.url}
          date={publishedAt}
          channel={channelTitle}
          key={video.etag}
        />
      );
    });

  return (
    <div>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} /> 
      ) : channelList.length > 0 || videoList.length > 0 ? (
        <>
          {channelList.length > 0 ? (
            <>
              <Header>Channels</Header>
              <div>{channelList}</div>
              <hr />
            </>
          ) : (
            <></>
          )}
          {videoList.length > 0 ? (
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
