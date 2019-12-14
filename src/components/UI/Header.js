import React from 'react';

import StyledHeader from '../../styles/Header';
import StyledNav from '../../styles/StyledNav';
import StyledNavLink from '../../styles/StyledNavLink';


const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <div>Contact Keeper</div>
          <ul>
            <li><StyledNavLink exact to="/">Home</StyledNavLink></li>
            <li><StyledNavLink exact to="/about">About</StyledNavLink></li>
          </ul>
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Header;
