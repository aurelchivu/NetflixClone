import React from 'react';
import '../style/Banner.css';

const Banner = () => {
  const truncate = (text, n) => text?.length > n ? text.substr(0, n - 1) + '...' : text;
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__title'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis alias distinctio excepturi impedit esse eum voluptatem, aliquam laborum quidem earum molestiae soluta. Aliquid laudantium delectus iure! Aut pariatur numquam iste.`
          , 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
