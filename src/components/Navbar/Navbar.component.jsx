import React, { useState } from 'react';
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

  const toggleDarkMode = () => setDarkTheme(!darkTheme);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    handleNavbarSearch(search);
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
          <Icon>
            <FontAwesomeIcon className="active" icon={faHome} />
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
            <FontAwesomeIcon className="active" icon={faHome} />
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
