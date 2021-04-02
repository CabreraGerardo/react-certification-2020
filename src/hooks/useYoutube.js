import { useState, useEffect } from 'react';

const useYoutube = (requestUrl) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(requestUrl)
      .then((res) => res.json())
      .then(setVideos)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [requestUrl]);

  return [loading, videos, error];
};

export default useYoutube;
