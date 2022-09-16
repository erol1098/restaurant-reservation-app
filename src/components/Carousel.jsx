import React from 'react';

const Carousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
      style={{ width: '100%', height: 'calc(100vh - 6rem)' }}
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
          data-bs-interval='5000'
          style={{
            width: '100%',
            height: 'calc(100vh - 6rem)',
          }}
        >
          <img
            src='https://firebasestorage.googleapis.com/v0/b/merkez-lokantasi.appspot.com/o/1.jpg?alt=media&token=dee540f2-3fc5-44fa-9fff-82e484139bf8'
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='carousel-item'
          data-bs-interval='5000'
          style={{ width: '100%', height: 'calc(100vh - 6rem)' }}
        >
          <img
            src='https://firebasestorage.googleapis.com/v0/b/merkez-lokantasi.appspot.com/o/2.jpg?alt=media&token=9cd00b7e-6598-4a81-9e6a-ec10d2c994f6'
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='carousel-item'
          data-bs-interval='5000'
          style={{ width: '100%', height: 'calc(100vh - 6rem)' }}
        >
          <img
            src='https://firebasestorage.googleapis.com/v0/b/merkez-lokantasi.appspot.com/o/3.jpg?alt=media&token=f593fd5a-e2c8-4164-a308-4b39f89e1bdf'
            className='d-block w-100 h-100'
            alt='...'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='carousel-item'
          data-bs-interval='5000'
          style={{ width: '100%', height: 'calc(100vh - 6rem)' }}
        >
          <img
            src='https://firebasestorage.googleapis.com/v0/b/merkez-lokantasi.appspot.com/o/4.jpg?alt=media&token=2de80cdf-9c6f-48b7-be31-fed0335c639f'
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
