import React, { useState, useEffect } from 'react';
import '../style/Nav.css';

const Nav = () => {
  const [showNav, handleShowNav] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 80) {
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
    <div className={`nav ${showNav && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          className='nav__logo'
          src='/netflix-transparent.png'
          alt='netflix logo'
        />
        <img
          className='nav__avatar'
          src='https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXrmj4H9RUyDiO28L-KJxDGc9oDijd4jnl5RyCkiWMPB6xFxiVdRiKdOcNjG8kn4A3idJRTGAzuBuQ__c6yl1m0.png?r=fcc'
          alt='netflix avatar'
        />
      </div>
    </div>
  );
};

export default Nav;
