import React, { useState, useEffect } from 'react';
import '../style/Nav.css';

const Nav = () => {
  const [showNav, handleShowNav] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShowNav(true);
    } else {
      handleShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div className={`nav ${showNav && 'nav_black'}`}>
      {/* <div className='nav nav_black'> */}
      <div className='nav_contents'>
        <img
          className='nav_logo'
          src='/netflix-transparent.png'
          alt='netflix logo'
        />
        <img
          className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='netflix avatar'
        />
      </div>
    </div>
  );
};

export default Nav;
