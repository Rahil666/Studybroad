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
      autoPlaySpeed={453000}
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
  src="/Reviewimg.jpg"
/>
<div className="carousel-titleTestimonial mt-1">ATHIRA T P
</div>
<p className='carousel-titleTestimonialsub '>JOB VISA, DUBAI</p>
<div className='heightty'>
<p className='dessub'>Great Service! I got a house maid job in dubai in a few weeks! 
Thanks a lot to the staff for the help, i really appreciate that. I surely recommend Kate exodus immigration!</p>
</div>
</div>
</div>

<div className='carouselitemTestimonial'>
<div className='carousel-containerTestimonial'> 
<img
className="carousel-imgTestimonial"
alt="100%x280"
src="/Reviewimg2.jpg"
/>
<div className="carousel-titleTestimonial mt-1">ABHIJITH K S
</div>
<p className='carousel-titleTestimonialsub '>JOB VISA, DUBAI</p>
<div className='heightty



'>
<p className='dessub'>Superb experience!! I am very grateful for all the hard work you guys did on my file .I strongly recommend kate exodus Immigration to all because they are helpful, professional and their work is very detailed. I really like that 
client satisfaction is the most important thing for them. I really love your service !!!</p>
</div>
</div>
</div>









    </Carousel>
  );
};

export default Testmoni;
