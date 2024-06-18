import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={`${className} slick-arrow slick-prev`} onClick={onClick}>
      Prev
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slides = [
    { id: 1, url: 'girlsss.png', name: 'Mary Rose', testimonial: 'Degree Bachelor',country:'German',

      des:'Best Immigration Consultant are very well professionals in theit field'
     },
     { id: 1, url: 'funding.png', name: 'Mary Rose', testimonial: 'Degree Bachelor',country:'German',

      des:'Best Immigration Consultant are very well professionals in theit field'
     },

  ];

  return (
    <div className="carousel-wrapper   ">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="slides ">

<div className='d-flex  gap-3'>
            <img src={slide.url} alt={`Slide ${slide.id}`} className="slide-img" />
            <div className="slide-content">
              <h3>{slide.name}</h3>
              <p>{slide.testimonial}</p>
              <p>{slide.country}</p>

             
              </div>
             
            </div>
            <p>{slide.des}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
