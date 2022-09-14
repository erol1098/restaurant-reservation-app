import React from 'react';

import p1 from '../assets/images/1.jpg';
import p2 from '../assets/images/2.jpg';
import p3 from '../assets/images/3.jpg';
import p4 from '../assets/images/4.jpg';

const Carousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
      style={{ width: '100%', height: 'calc(100vh - 5rem)' }}
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={0}
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={1}
          aria-label='Slide 2'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={2}
          aria-label='Slide 3'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={3}
          aria-label='Slide 4'
        />
      </div>
      <div className='carousel-inner'>
        <div
          className='carousel-item active'
          style={{
            width: '100%',
            height: 'calc(100vh - 5rem)',
          }}
        >
          <img
            src={p1}
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='carousel-item'
          style={{ width: '100%', height: 'calc(100vh - 5rem)' }}
        >
          <img
            src={p2}
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='carousel-item'
          style={{ width: '100%', height: 'calc(100vh - 5rem)' }}
        >
          <img
            src={p3}
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='carousel-item'
          style={{ width: '100%', height: 'calc(100vh - 5rem)' }}
        >
          <img
            src={p4}
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
