import React from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import '../style/HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='home__screen'>
      <Nav />
      <Banner />
    </div>
  );
};

export default HomeScreen;
