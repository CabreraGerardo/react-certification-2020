import React, { useRef } from 'react';
import ResultsList from '../../components/ResultsList';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <ResultsList />
    </section>
  );
}

export default HomePage;
