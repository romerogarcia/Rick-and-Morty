import React from 'react';
import rickandmortyLogo from '../images/rickandmortyLogo.png';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        alt="rick and morty logo"
        src={rickandmortyLogo}
      />
      <p className="header__subtitle">Character finder</p>
    </header>
  );
};

export default Header;
