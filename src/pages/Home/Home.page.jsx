import React, { useRef } from 'react';
import ResultsList from '../../components/ResultsList';

import './Home.styles.css';

function HomePage({ search }) {
  const sectionRef = useRef(null);
  return (
    <section className="homepage" ref={sectionRef}>
      <ResultsList search={search} />
    </section>
  );
}

export default HomePage;
