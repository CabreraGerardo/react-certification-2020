import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found" style={{ paddingTop: '80px', textAlign: 'center' }}>
      <img src="404.gif" alt="page not found" />
      <h1 style={{ paddingTop: '30px' }}>
        This is not the page you are looking for ...
        <Link to="/" className="home-link">
          Move along (Go Home)
        </Link>
      </h1>
    </section>
  );
}

export default NotFoundPage;
