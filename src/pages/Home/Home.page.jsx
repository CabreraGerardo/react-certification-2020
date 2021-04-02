import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import ResultsList from '../../components/ResultsList';
import useYoutube from '../../hooks/useYoutube';

import './Home.styles.css';

function HomePage({ search }) {
  const sectionRef = useRef(null);

  const [loading, videos, error] = useYoutube(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  let content = <FontAwesomeIcon icon={faSpinner} />;

  if (error) {
    content = <h1>Hubo un error al buscar tus videos</h1>;
  } else if (!videos?.items) {
    content = (
      <h1 style={{ margin: '58px' }}>
        Please, search for something on the search bar at the top left
      </h1>
    );
  } else if (!loading && videos?.items && !error) {
    content = <ResultsList videos={videos.items} />;
  }

  return (
    <section className="homepage" ref={sectionRef}>
      {content}
    </section>
  );
}

export default HomePage;
