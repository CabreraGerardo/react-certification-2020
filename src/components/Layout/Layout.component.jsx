import React from 'react';
import { Container } from './Layout.styles';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
