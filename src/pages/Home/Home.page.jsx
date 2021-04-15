import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useContext } from 'react';
import ResultsList from '../../components/ResultsList';
import useYoutube from '../../hooks/useYoutube';
import { AppContext } from '../../providers/appProvider';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const {
    state: { search },
  } = useContext(AppContext);

  const [loading, videos, error] = useYoutube(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  let content = <FontAwesomeIcon icon={faSpinner} />;

  if (error) {
    console.log(error);
    content = (
      <div style={{ display: 'inline' }}>
        <h1>
          Oh no! Something is keeping us from showing your videos
          <span role="img" aria-label="Worried Emoji">
            {' '}
            😨
          </span>
        </h1>
        <br />
        <p>{error.message}</p>
      </div>
    );
  } else if (loading) {
    content = <FontAwesomeIcon icon={faSpinner} />;
  } else if (!loading && videos?.items && !error) {
    content = <ResultsList videos={videos.items} />;
  } else if (!videos?.items) {
    content = (
      <h1 style={{ margin: '58px' }}>
        Please, type something on the search bar at the top left
      </h1>
    );
  }

  return (
    <section className="homepage" ref={sectionRef}>
      {content}
    </section>
  );
}

export default HomePage;
