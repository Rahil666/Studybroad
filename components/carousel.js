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
      slidesToSlide: 3 // Number of slides to scroll at once
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
      showDots={true}
      responsive={responsive}
      ssr={true} // Server Side Rendering, true or false
      infinite={true}
      autoPlay={deviceType !== 'mobile'} // Auto play when not on mobile
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile','desktop']}
      deviceType={deviceType} // 'desktop', 'tablet', or 'mobile'
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    
      <div className='carouselitemjob'>
        <div className='carousel-containerjob'> 
      <img
      className="carousel-imgjob"
      alt="100%x280"
      src="/workinluxembourg.jpg"
    />
    <div className="carousel-titlejob mt-1">Luxembourg</div>
    <p className='desjob'>Luxembourg offers skilled jobs in finance, IT, and engineering, and unskilled jobs in hospitality, retail, and construction.</p>
    </div>
    </div>
    <div className='carouselitemjob'>  
      <div className='carousel-containerjob'> 
      <img
      className="carousel-img"
      alt="100%x280"
      src="/maltajob.png"
    />
    <div className="carousel-titlejob mt-1">Malta</div>
    <p className='desjob'>
    Malta's job market features opportunities in tourism and hospitality, finance, 
    IT, and construction, reflecting its diverse economy and growing industries. 
   
    </p>
    </div>
    </div>
    
    <div className='carouselitemjob'>  
    <div className='carousel-containerjob'> 
    <img
    className="carousel-img"
    alt="100%x280"
    src="/maltajob.png"
  />
  <div className="carousel-titlejob mt-1">EUROPE</div>
  <p className='desjob'>
  Malta's job market features opportunities in tourism and hospitality, finance, 
  IT, and construction, reflecting its diverse economy and growing industries. 
 
  </p>
  </div>
  </div>

  <div className='carouselitemjob'>  
  <div className='carousel-containerjob'> 
  <img
  className="carousel-img"
  alt="100%x280"
  src="/maltajob.png"
/>
<div className="carousel-titlejob mt-1">POLAND</div>
<p className='desjob'>
Malta's job market features opportunities in tourism and hospitality, finance, 
IT, and construction, reflecting its diverse economy and growing industries. 

</p>
</div>
</div>

<div className='carouselitemjob'>  
<div className='carousel-containerjob'> 
<img
className="carousel-img"
alt="100%x280"
src="/maltajob.png"
/>
<div className="carousel-titlejob mt-1">UAE</div>
<p className='desjob'>
Malta's job market features opportunities in tourism and hospitality, finance, 
IT, and construction, reflecting its diverse economy and growing industries. 

</p>
</div>
</div>
<div className='carouselitemjob'>  
<div className='carousel-containerjob'> 
<img
className="carousel-img"
alt="100%x280"
src="/maltajob.png"
/>
<div className="carousel-titlejob mt-1">NETHERLANDS</div>
<p className='desjob'>
Malta's job market features opportunities in tourism and hospitality, finance, 
IT, and construction, reflecting its diverse economy and growing industries. 

</p>
</div>
</div>
    </Carousel>
  );
};

export default Testmoni;
