import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import { getVideo } from '../../providers/youtube';

import { Container } from './Player.styles';


function PlayerPage() {
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState(null);
  const [video, setVideo] = useState(null);

  const {
    state: { videoId },
  } = useLocation();

  console.log(videoId);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const data = await getVideo(videoId);
        setLoading(false);
        setPlayer(data.items[0].player);
        setVideo(data.items[0].snippet);
      } catch (e) {
        console.log(e);
        setPlayer(null);
        setVideo(null);
        setLoading(false);
      }
    };
    fetchVideo();
  }, [videoId]);

  console.log(player);

  return (
    <Container>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} />
      ) : (
        <div>
          <h1>{video?.title}</h1>
          <div>{parse(player?.embedHtml || '')}</div>
        </div>
      )}
    </Container>
  );
}

export default PlayerPage;
