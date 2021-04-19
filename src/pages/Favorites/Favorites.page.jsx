import React, { useRef } from 'react';
import ResultsList from '../../components/ResultsList';
import { storage } from '../../utils/storage';

import './Favorites.styles.css';

export default function FavoritesPage() {
  const sectionRef = useRef(null);

  return (
    <section className="favorites" ref={sectionRef}>
      <ResultsList videos={storage.get('favorites') || []} />
    </section>
  );
}
