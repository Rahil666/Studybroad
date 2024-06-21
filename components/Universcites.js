import React from 'react';
import Slider from 'react-slick';

const Universities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
  };

  return (
    <div className='slide-part' style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div className='partner-bg-image'>
          <img src="uni1.jpg" alt="Slide 1" className='partner-image' />
        </div>
        <div className='partner-bg-image'>
          <img src="Uni2.jpg" alt="Slide 2" className='partner-image' />
        </div>
        <div className='partner-bg-image'>
          <img src="Uni3.jpg" alt="Slide 3" className='partner-image' />
        </div>
        <div className='partner-bg-image'>
          <img src="Uni4.jpg" alt="Slide 4" className='partner-image' />
        </div>
      </Slider>
    </div>
  );
};

export default Universities;
