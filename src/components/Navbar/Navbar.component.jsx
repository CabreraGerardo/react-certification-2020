import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHeart,
  faHome,
  faMoon,
  faSearch,
  faSignInAlt,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  Left,
  Center,
  Right,
  Logo,
  SearchInput,
  Icon,
  SearchButton,
  MobileMenu,
  MobileMenuButton,
} from './Navbar.styles';

import logo from '../../assets/logo.png';

// import './Navbar.styles.css';

function Navbar({ handleNavbarSearch }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState('Wizeline');
  const { pathname } = useLocation();
  const history = useHistory();

  const toggleDarkMode = () => setDarkTheme(!darkTheme);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const handleInput = (event) => {
    setSearch(event.target.value);
    if (pathname !== '/') history.push('/');
  };

  const handleSearch = () => {
    handleNavbarSearch(search);
  };

  const goTo = (path) => {
    if (pathname !== path) history.push(path);
  };

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        <Left>
          <SearchInput
            value={search}
            onChange={handleInput}
            type="text"
            placeholder="Search..."
          />
          <SearchButton onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </Left>
        <Center>
          <Icon onClick={() => goTo('/')}>
            <FontAwesomeIcon className={pathname === '/' ? 'active' : ''} icon={faHome} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faHeart} />
          </Icon>
        </Center>
        <Right>
          <Icon>
            <FontAwesomeIcon icon={faSignInAlt} />
          </Icon>
          <Icon>
            {darkTheme ? (
              <FontAwesomeIcon icon={faSun} onClick={toggleDarkMode} />
            ) : (
              <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} />
            )}
          </Icon>
        </Right>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuButton>
      </Wrapper>
      {mobileMenu ? (
        <MobileMenu>
          <Icon>
            <FontAwesomeIcon
              onClick={() => goTo('/')}
              className={pathname === '/' ? 'active' : ''}
              icon={faHome}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faHeart} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faSignInAlt} />
          </Icon>
          <Icon>
            {darkTheme ? (
              <FontAwesomeIcon icon={faSun} onClick={toggleDarkMode} />
            ) : (
              <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} />
            )}
          </Icon>
        </MobileMenu>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Navbar;
