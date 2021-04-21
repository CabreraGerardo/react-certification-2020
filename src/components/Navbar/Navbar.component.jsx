import React, { useState, useContext } from 'react';
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
  faSignOutAlt,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
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
import { AppContext, themes } from '../../providers/appProvider';
import LoginModal from '../LoginModal';
import { useAuth } from '../../providers/authProvider';

// import './Navbar.styles.css';

function Navbar() {
  const {
    state: { theme, search },
    dispatch,
  } = useContext(AppContext);
  const { authenticated, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState(search);

  const { pathname } = useLocation();
  const history = useHistory();

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
    dispatch({
      type: 'CHANGE_THEME',
      payload: darkTheme ? themes.dark : themes.light,
    });
  };

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const handleSearch = () => {
    dispatch({
      type: 'CHANGE_SEARCH',
      payload: searchTerm,
    });
    if (pathname !== '/') history.push('/');
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const goTo = (path) => {
    if (pathname !== path) history.push(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        <Left>
          <SearchInput
            value={searchTerm}
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
          <Icon onClick={() => goTo('/favorites')}>
            <FontAwesomeIcon
              className={pathname === '/favorites' ? 'active' : ''}
              icon={faHeart}
            />
          </Icon>
        </Center>
        <Right>
          {!authenticated ? (
            <>
              <span>Sign in</span>
              <Icon>
                <FontAwesomeIcon
                  onClick={() => {
                    setOpen(!open);
                  }}
                  icon={faSignInAlt}
                />
              </Icon>
            </>
          ) : (
            <>
              <span>Sign out</span>
              <Icon>
                <FontAwesomeIcon onClick={logout} icon={faSignOutAlt} />
              </Icon>
            </>
          )}
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
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
    </ThemeProvider>
  );
}

export default Navbar;
