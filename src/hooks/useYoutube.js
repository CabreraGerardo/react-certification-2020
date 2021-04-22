import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const useYoutube = (requestUrl, isFavorites) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        if (!isFavorites) {
          const response = await fetch(requestUrl);

          if (response.status === 403)
            throw new Error(
              "We searched a lot of videos! Youtube won't let us continue 😢"
            );
          const resJson = await response.json();
          if (!response.ok) {
            throw Error(resJson.message);
          } else {
            setVideos(resJson);
            setLoading(false);
          }
        } else {
          setVideos({ items: storage.get('favorites') || [] });
          setLoading(false);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchApi();
  }, [requestUrl, isFavorites]);

  return [loading, videos, error];
};

export default useYoutube;
