import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testmoni = (props) => {
  const [deviceType, setDeviceType] = useState('desktop'); // Default device type

  // Detect device type on component mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDeviceType('desktop');
      } else if (window.innerWidth >= 464) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    // Set initial device type
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // Number of slides to scroll at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // Server Side Rendering, true or false
      infinite={true}
      autoPlay={deviceType !== 'mobile'} // Auto play when not on mobile
      autoPlaySpeed={100000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container "
      removeArrowOnDeviceType={['tablet', 'mobile','desktop']}
      deviceType={deviceType} // 'desktop', 'tablet', or 'mobile'
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    
      <div className='carouselitemTestimonial'>
        <div className='carousel-containerTestimonial'> 
      <img
      className="carousel-imgTestimonial"
      alt="100%x280"
      src="/workinluxembourg.jpg"
    />
    <div className="carousel-titleTestimonial mt-1">Akhil</div> 
    <p className='carousel-titleTestimonialsub '>STUDY VISA,SINGAPORE</p>
    <p className='dessub '>Luxembourg offers skilled jobs in finance, IT, and engineering, and unskilled jobs in hospitality, retail, and construction.</p>
    </div>
    </div>



    <div className='carouselitemTestimonial'>
    <div className='carousel-containerTestimonial'> 
  <img
  className="carousel-imgTestimonial"
  alt="100%x280"
  src="/workinluxembourg.jpg"
/>
<div className="carousel-titleTestimonial mt-1">Arya</div>
<p className='carousel-titleTestimonialsub '>WORK PERMIT VISA,POLAND</p>
<p className='dessub'>Luxembourg offers skilled jobs in finance, IT, and engineering, and unskilled jobs in hospitality, retail, and construction.</p>
</div>
</div>

<div className='carouselitemTestimonial'>
<div className='carousel-containerTestimonial'> 
<img
className="carousel-imgTestimonial"
alt="100%x280"
src="/workinluxembourg.jpg"
/>
<div className="carousel-titleTestimonial mt-1">Dileep</div>
<p className='carousel-titleTestimonialsub '>WORK PERMIT VISA,UAE</p>
<p className='dessub'>Luxembourg offers skilled jobs in finance, IT, and engineering, and unskilled jobs in hospitality, retail, and construction.</p>
</div>
</div>




<div className='carouselitemTestimonial'>
<div className='carousel-containerTestimonial'> 
<img
className="carousel-imgTestimonial"
alt="100%x280"
src="/workinluxembourg.jpg"
/>
<div className="carousel-titleTestimonial mt-1">Shilpa</div>
<p className='carousel-titleTestimonialsub '>VISIT  VISA,SINGAPORE</p>
<p className='dessub'>Luxembourg offers skilled jobs in finance, IT, and engineering, and unskilled jobs in hospitality, retail, and construction.</p>
</div>
</div>




    </Carousel>
  );
};

export default Testmoni;
