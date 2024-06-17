import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const BannerCarousel = () => {
  const settings = {
    dots: false,
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
    { id: 1, url: 'slider',
      name: '',
       testimonial: 'Degree Bachelor',
        country: 'German',
      des: 'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Elit sit varius condimentum tempor vel commodo malesuada. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a'
    },

    { id: 2, url: 'slider',
      name: 'Study Abroad & Enhance Your Career Prospects',
       testimonial: 'Degree Bachelor',
        country: 'German',
      des: ''
    },
  ];

  return (
    <div className="carousel-wrapperr">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} 
               className={slide.url}
              
          >
            <div className="d-flexr gapr-3 ">
              <div className="col-12 container">
                <div className="row">
                  <div className="col-md-7 "></div>
                  <div className="col-md-5  ">
                  <div className='banner-contentr'>
                    <h3 className='headername '>Study Abroad & <br/> Enhance Your  <br/> Career Prospects</h3>

                    <p className='mt-4 desstyle'>By studying abroad, you not only gain invaluable global perspectives but also enhance your adaptability, problem-solving skills, and networking capabilities. These experiences make you a standout candidate in today's competitive job market.
                     </p>
                    </div>
                    
<div className='buttonstyleapply'>
<a  href='/#contactus'>
<p className='contactustext '>Apply Now</p>
</a>
</div>

<a href='https://www.facebook.com/people/Kate-Exodus-Consultancy/61559892727924/?mibextid=ZbWKwL'>
<FaFacebookF className='socialicon' />
</a>
<a href="https://wa.me/+918921565286" target="_blank" rel="noopener noreferrer">
<FaWhatsapp className='socialicon'  />
</a>
<a href='https://x.com/kateexodus?fbclid=IwZXh0bgNhZW0CMTAAAR3Cb81n4P0T7w2RRP0pVOYcEM9lofKAql2YDxELiFItJGwfKpjh8ajgSdA_aem_AY1Yi1jlEyZ3YmqFJpXII_ZrwQGoEpcFK1tQbH6bvc3Gh2aWTGFdav3J7bgbPqPxw9JhuVCN2pK-MQRViZXElq4q '>
<FaXTwitter className='socialicon'  />
</a>
<a href='https://www.instagram.com/kateexodus/?igsh=dW1nZzZvbmNydDBv'>
<FaInstagram className='socialicon'  />
</a>
                  </div>
                
                </div>
              </div>
            </div>
            <div>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
