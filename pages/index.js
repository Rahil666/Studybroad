
import "bootstrap/dist/css/bootstrap.min.css";
import BannerCarousel from "@/components/BannerCaro";

import FinalCarousel from "@/components/final";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import Header from "@/components/Header/Header";

import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import MyCarousel from "@/components/Owlcarosel";
import Testmoni from "@/components/carousel";
import Universcites from "@/components/Universcites";
import { RiArrowRightSLine } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';






export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectOption: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [userMsg, setUserMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for showing modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!formData.selectOption) {
      errors.selectOption = "Please select an option";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setLoader(true);
      try {
        const response = await fetch(
          "https://lunarsenterprises.com:5003/studyabroad/contact-us",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phno: formData.phone,
              subject: formData.selectOption,
              message: formData.message,
            }),
          }
        );

        if (response.status === 200) {
          setUserMsg("Email sent successfully!");
          setShowModal(true); // Show modal on success
          setLoader(false);
      
          setLoader(false);
          // router.push("/thank-you"); // Uncomment if using a router
          console.log("Response succeeded!");
        } else {
          console.log("Something went wrong...please check");
          setLoader(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setLoader(false);
      }
    } else {
      setErrors(errors);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };
  const images = [
    "uni1.jpg",
    "Uni2.jpg",
    "Uni3.jpg",
    "Uni4.jpg",
     "uni1.jpg",
    "Uni2.jpg",
    "Uni3.jpg",
    "Uni4.jpg",
  
  ];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element1 = ref1.current;
      const element2 = ref2.current;
      const element3 = ref3.current;
      const element4 = ref4.current;

      const windowHeight = window.innerHeight;

      if (element1.getBoundingClientRect().top < windowHeight) {
        element1.classList.add('animate-right-to-left');
      }
      if (element2.getBoundingClientRect().top < windowHeight) {
        element2.classList.add('animate-right-to-left');
      }
      if (element3.getBoundingClientRect().top < windowHeight) {
        element3.classList.add('animate-right-to-left');
      }
      if (element4.getBoundingClientRect().top < windowHeight) {
        element4.classList.add('animate-right-to-left');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Kate Exodus</title>
        <meta name="description" content="Powered by Lunar Enterpises" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <>
        <Header />
        <div className="">
          <BannerCarousel />
        </div>
        <div className="  container mt-5  sideimagepara">
        <div className="col-md-12  ">
          <div className="row">
            <div ref={ref1} className="col-md-3">
              <img src="\StudyAb.png" className="Imagesstudyicon" />

              <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                Study Abroad
              </p>
            </div>
            <div ref={ref2} className="col-md-3">
              <img src="\consulting.png" className="Imagesstudyicon" />
              <p className="mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                Consulting
              </p>
            </div>
            <div ref={ref3} className="col-md-3">
              <img src="\jobhire.png" className="Imagesstudyicon" />
              <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                Abroad Job Assistances
              </p>
            </div>

            <div ref={ref4}className="col-md-3">
              <img src="\Helpsupport.png" className="Imagesstudyicon" />
              <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                
                Help & Support
              </p>
            </div>
          </div>
        </div>

        <div className=" col-12 mt-5  sideimagepara">
          <div className="row">
            <div className="col-6">
              <h1>Discover the World with Our Comprehensive Services</h1>

              <p>
                Perfect Job Consultancy is an India based recruitment
                placement and training consultancy, having an ultimate package
                of services for recruiters as well as jobseekers. When it
                comes to placement consultancy, we hold specialization in
                rendering effective solutions to clients’ variegated needs.
                Right from Banking, Financial and Insurance to Manufacturing
                and Hospitality to BPO/ IT, we extend one of kinds services
                across multiple disciplines. Our workforce solutions are based
                on market research, industry expertise and domain knowledge,
                Thus, we provide competitive edge to both i.e. Recruiters and
                Jobseekers.
              </p>

              <p>
                We assist students with their travel and relocation for the
                course of study thereby ensuring a worry-free transition.
                Moving to another country, be it for study or settling, is no
                trivial task. We understand the stress and pressure this phase
                can cause. Excitement at times gives way to anxieties as one
                gets to hear a lot of experiences about the country often true
                or untrue, anxieties about the new land, people, customs take
                over your senses. We view this as a transitional phase hence
                offering a complete and thorough journey and relocation
                service, leaving no stone unturned to ensure a smooth
                transition. Our travel and relocation expertise enables you to
                literally relax while we handle it all.
              </p>
              <p>
                Many of us dream of a day when we can embark on an
                international tour, but most feel lost when it comes to
                planning out the said trip. While many of us lack the time it
                takes to map out all the details of the international tour
                packages, what can help us move our plan along is a trusted
                partner turning our international tour from a dream to a goal.
                If you’re looking for an international tour, you’ve come to
                the right place. Here you will be able to search, plan and
                book your perfect international tour packages along with
                expert travel advice, in-depth destination information, and
                lots of travel tips. You are sure to get inspired to travel
                the world with SOTC India. To get you started planning your
                next international tour, we have a wide range of International
                holiday packages to choose from and for the avid traveler in
                you, we have completely customized holiday options as well.
              </p>
            </div>

            <div className="col-6">
              <div className="col-12 ">
                <div className="row">
                  <div className=" col-6">
                    <img src="\girlsss.png" className="Imagessides" />
                  </div>

                  <div className="col-6">
                    <img src="\imagespass.png" className="Imagespassport" />
                    <div className="mt-2">
                      <img src="\Teamdis.png" className="Imagespassport" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-12 mt-5  sideimageparahide ">
          <div className="col-6 align-items-center justify-content-center d-flex">
            <div className="col-12  align-items-center justify-content-center d-flex">
              <div className="row">
                <div className=" col-8">
                  <img src="\girlsss.png" className="Imagessidehide" />
                </div>

                <div className="col-4">
                  <img src="\imagespass.png" className="Imagessidehide" />
                  <div className="mt-2">
                    <img src="\Teamdis.png" className="Imagessidehide" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12  mt-3">
            <h1>Discover the World with Our Comprehensive Services</h1>

            <p>
              Perfect Job Consultancy is an India based recruitment placement
              and training consultancy, having an ultimate package of services
              for recruiters as well as jobseekers. When it comes to placement
              consultancy, we hold specialization in rendering effective
              solutions to clients’ variegated needs. Right from Banking,
              Financial and Insurance to Manufacturing and Hospitality to BPO/
              IT, we extend one of kinds services across multiple disciplines.
              Our workforce solutions are based on market research, industry
              expertise and domain knowledge, Thus, we provide competitive
              edge to both i.e. Recruiters and Jobseekers.
            </p>

            <p>
              We assist students with their travel and relocation for the
              course of study thereby ensuring a worry-free transition. Moving
              to another country, be it for study or settling, is no trivial
              task. We understand the stress and pressure this phase can
              cause. Excitement at times gives way to anxieties as one gets to
              hear a lot of experiences about the country often true or
              untrue, anxieties about the new land, people, customs take over
              your senses. We view this as a transitional phase hence offering
              a complete and thorough journey and relocation service, leaving
              no stone unturned to ensure a smooth transition. Our travel and
              relocation expertise enables you to literally relax while we
              handle it all.
            </p>
            <p>
              Many of us dream of a day when we can embark on an international
              tour, but most feel lost when it comes to planning out the said
              trip. While many of us lack the time it takes to map out all the
              details of the international tour packages, what can help us
              move our plan along is a trusted partner turning our
              international tour from a dream to a goal. If you’re looking for
              an international tour, you’ve come to the right place. Here you
              will be able to search, plan and book your perfect international
              tour packages along with expert travel advice, in-depth
              destination information, and lots of travel tips. You are sure
              to get inspired to travel the world with SOTC India. To get you
              started planning your next international tour, we have a wide
              range of International holiday packages to choose from and for
              the avid traveler in you, we have completely customized holiday
              options as well.
            </p>
          </div>
        </div>
      </div>

      <div className="  container mt-5  sideimageparahide ">
        <div className="col-md-12  ">
          <div className="row">
            <div className="col-6">
              <div className="col-12">
                <div className="col-12 ">
                  <img src="\StudyAb.png" className="Imagesstudyicon" />

                  <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                    Study Abroad
                  </p>
                </div>
                <div className="col-12">
                  <img src="\consulting.png" className="Imagesstudyicon" />
                  <p className="mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                    Consulting
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="col">
                <img src="\jobhire.png" className="Imagesstudyicon" />
                <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                  Abroad Job Assistances
                </p>
              </div>

              <div className="col">
                <img src="\Helpsupport.png" className="Imagesstudyicon" />
                <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                  {" "}
                  Help & Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-12 mt-5  sideimagepara">
          <div className="row">
            <div className="col-6">
              <h1>Discover the World with Our Comprehensive Services</h1>

              <p>
                Perfect Job Consultancy is an India based recruitment
                placement and training consultancy, having an ultimate package
                of services for recruiters as well as jobseekers. When it
                comes to placement consultancy, we hold specialization in
                rendering effective solutions to clients’ variegated needs.
                Right from Banking, Financial and Insurance to Manufacturing
                and Hospitality to BPO/ IT, we extend one of kinds services
                across multiple disciplines. Our workforce solutions are based
                on market research, industry expertise and domain knowledge,
                Thus, we provide competitive edge to both i.e. Recruiters and
                Jobseekers.
              </p>

              <p>
                We assist students with their travel and relocation for the
                course of study thereby ensuring a worry-free transition.
                Moving to another country, be it for study or settling, is no
                trivial task. We understand the stress and pressure this phase
                can cause. Excitement at times gives way to anxieties as one
                gets to hear a lot of experiences about the country often true
                or untrue, anxieties about the new land, people, customs take
                over your senses. We view this as a transitional phase hence
                offering a complete and thorough journey and relocation
                service, leaving no stone unturned to ensure a smooth
                transition. Our travel and relocation expertise enables you to
                literally relax while we handle it all.
              </p>
              <p>
                Many of us dream of a day when we can embark on an
                international tour, but most feel lost when it comes to
                planning out the said trip. While many of us lack the time it
                takes to map out all the details of the international tour
                packages, what can help us move our plan along is a trusted
                partner turning our international tour from a dream to a goal.
                If you’re looking for an international tour, you’ve come to
                the right place. Here you will be able to search, plan and
                book your perfect international tour packages along with
                expert travel advice, in-depth destination information, and
                lots of travel tips. You are sure to get inspired to travel
                the world with SOTC India. To get you started planning your
                next international tour, we have a wide range of International
                holiday packages to choose from and for the avid traveler in
                you, we have completely customized holiday options as well.
              </p>
            </div>

            <div className="col-6">
              <div className="col-12 ">
                <div className="row">
                  <div className=" col-6">
                    <img src="\girlsss.png" className="Imagessides" />
                  </div>

                  <div className="col-6">
                    <img src="\imagespass.png" className="Imagespassport" />
                    <div className="mt-2">
                      <img src="\Teamdis.png" className="Imagespassport" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  mt-5  sideimageparahide ">
          <div className="col-12 ">
            <div className="col-12   ">
              <div className="row">
                <div className=" col">
                  <img src="\girlsss.png" className="Imagessidehide" />
                </div>

                <div className="col ">
                  <img src="\imagespass.png" className="Imagessidehide" />
                  <div className="mt-2">
                    <img src="\Teamdis.png" className="Imagessidehide" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12  mt-3">
            <h1>Discover the World with Our Comprehensive Services</h1>

            <p>
              Perfect Job Consultancy is an India based recruitment placement
              and training consultancy, having an ultimate package of services
              for recruiters as well as jobseekers. When it comes to placement
              consultancy, we hold specialization in rendering effective
              solutions to clients’ variegated needs. Right from Banking,
              Financial and Insurance to Manufacturing and Hospitality to BPO/
              IT, we extend one of kinds services across multiple disciplines.
              Our workforce solutions are based on market research, industry
              expertise and domain knowledge, Thus, we provide competitive
              edge to both i.e. Recruiters and Jobseekers.
            </p>

            <p>
              We assist students with their travel and relocation for the
              course of study thereby ensuring a worry-free transition. Moving
              to another country, be it for study or settling, is no trivial
              task. We understand the stress and pressure this phase can
              cause. Excitement at times gives way to anxieties as one gets to
              hear a lot of experiences about the country often true or
              untrue, anxieties about the new land, people, customs take over
              your senses. We view this as a transitional phase hence offering
              a complete and thorough journey and relocation service, leaving
              no stone unturned to ensure a smooth transition. Our travel and
              relocation expertise enables you to literally relax while we
              handle it all.
            </p>
            <p>
              Many of us dream of a day when we can embark on an international
              tour, but most feel lost when it comes to planning out the said
              trip. While many of us lack the time it takes to map out all the
              details of the international tour packages, what can help us
              move our plan along is a trusted partner turning our
              international tour from a dream to a goal. If you’re looking for
              an international tour, you’ve come to the right place. Here you
              will be able to search, plan and book your perfect international
              tour packages along with expert travel advice, in-depth
              destination information, and lots of travel tips. You are sure
              to get inspired to travel the world with SOTC India. To get you
              started planning your next international tour, we have a wide
              range of International holiday packages to choose from and for
              the avid traveler in you, we have completely customized holiday
              options as well.
            </p>
          </div>
        </div>
      </div>


        <div className=" bgstyle  mt-5 ">
          <div className="container pt-5 ">
            <div className="d-flex align-items-center  gap-4 ">
              <img src="/sidehum.png" className="sidehum" />
              <h1>How to Start Your Journey</h1>
            </div>
            <div className="row mt-5">
              <div className="col-md-4  bounce">
                <img src="\disscusion.png" className="initalimg" />

                <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                  Initial Discussion
                </p>
              </div>
              <div className="col-md-4 ">
              <div className='bounce'>
                <img src="\documention.png" className="disandfundimg" />
                <p className="mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                  Documention
                </p>
                </div>
                <div className="col-md-12 bounce">
                  <img src="\placing.png" className="disandfundimg" />
                  <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                    Get Placing
                  </p>
                </div>
              </div>
              <div className="col-md-4 bounce">
                <img src="\funding.png" className="disandfundimg" />
                <p className=" mainSectionsec mt-2 align-items-center d-flex justify-content-center">
                  Funding
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  container mt-3 ">
          <div className=" pt-5 ">
            <div className="d-flex align-items-center  gap-4 ">
              <img src="/sidehum.png" className="sidehum" />
              <h1>Choose Your Favourite Study Destinations</h1>
            </div>
            <div>
            <div className=' mt-5'>
         <MyCarousel/>
         </div>
          </div>
          
          </div>
        </div>

        <div className="  bgstyle mt-5 pb-5 ">
          <div className="container pt-5 ">
            <div className="d-flex align-items-center  gap-4 ">
              <img src="/sidehum.png" className="sidehum" />
              <h1>Professional Destinations</h1>
            </div>
            <div className="mt-3 ">
            <FinalCarousel />
            </div>
          </div>
        </div>
<div>

<div className="col-12 container p-5">
<div className="row">
<div className="col-md-4 ">
</div>
<div className="col-md-8">
<div className="col-md-12 ">
<div className="row ">
<div className="col-md-4 ">
<h1 style={{color:'#24415f' ,fontWeight:800}}>Visiting Visa and <br/> Flight Ticket Services</h1>
</div>
<div className="col-md-8">
<p style={{color: '#4E4E4D'}}>
Exploring new destinations and experiencing diverse cultures begins with obtaining a visiting visa, whether for vacation, visiting family, or attending events abroad. This process opens doors to new possibilities and enriches personal growth through cultural exchange. Additionally, securing the perfect flight is crucial for a seamless travel experience, ensuring convenience and comfort. Our services specialize in navigating visa applications and booking flights, tailored to meet your specific needs. Contact us today to start your journey with expert guidance and hassle-free travel arrangements.
</p>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
<div className='filling'>



</div>


<div className=" linearbg pt-5 pb-5 ">
        <div className=" container  ">
       
        <Testmoni />
            </div>
          
             
          
          </div>

   

        <div className="  partnerbg mt-5 ">
        <div className="container pt-5 ">
          <div className="d-flex align-items-center  gap-4 ">
            <img src="/sidehum.png" className="sidehum" />
            <h1>Our Partnering Universities</h1>
          </div>
          <div className="container p-5 col-12">
          <Universcites/>
          </div>
        </div>
      </div>



      <div className="  sliderServices  ">
      <div className="container  ">
        <div className="d-flex align-items-center  justify-content-center ">
         
        <h1 className='Severour'>Our Services</h1>
        </div>
        <div className="container p-5 col-12">
        <div className='col-md-4'>
        <div className=''>
        <div className='d-flex align-items-center d-flex boxservices'>
        
        <RiArrowRightSLine className='footericon'/><p className="pt-3 footerstextservices">Immigration and  Study Abroad</p>
        </div>
        
        
        
        
        <div className='d-flex align-items-center d-flexc boxservices mt-3'>
        <RiArrowRightSLine className='footericon'/><p className="pt-1 footerstextservices">Flight Ticket Bookings</p>
        </div>
        
        <div className='d-flex align-items-center d-flex boxservices mt-3'>
        <RiArrowRightSLine className='footericon'/><p className="pt-1 footerstextservices ">Visit Visa (All Countries)</p>
        </div>
        
        <div className='d-flex align-items-center d-flex boxservices mt-3'>
        <RiArrowRightSLine className='footericon'/><p className="pt-1 footerstextservices">Study Visa</p>
        </div>
        
        <div className='d-flex align-items-center d-flex boxservices mt-3 mb-5'>
        <RiArrowRightSLine className='footericon'/><p className="pt-1 footerstextservices">Work Permit</p>
        </div>
        
        </div>
        
        
        </div>
        </div>
      </div>
    </div>

       
        <div className="container  mt-5 mb-5 " id="contactus">
          <div className="container col-md-12 mt-5 slidescontact">
            <div className="row  ">
              <div className="col-md-6">
                <h1 className="contactuss"> Contact Us</h1>

                <div className="contactuss">
                  <div className="d-flex align-items-center d-flex">
                    <FaPhoneAlt />
                    <a href="tel:+91 8921565286">
                      <p className="pt-3 contactusstext">+91 8921565286</p>
                    </a>
                  </div>

                  <div className="d-flex align-items-center d-flex">
                    <MdEmail />
                    <a href="mailto:kateexodus@gmail.com">
                      <p className="pt-3 contactusstext">
                        kateexodus@gmail.com
                      </p>
                    </a>
                  </div>

                  <div className="d-flex align-items-center d-flex">
                    <FaLocationDot />
                    <p className="pt-3 contactusstext">
                      22/159-B, Kate Exodus Consultancy,
                      <br /> Near Chelakkara Grama Panchayat,
                      <br /> Chelakkara - 680586
                    </p>
                  </div>

                  <a href="https://www.facebook.com/people/Kate-Exodus-Consultancy/61559892727924/?mibextid=ZbWKwL">
                    <FaFacebookF className="socialicon" />
                  </a>
                  <a
                    href="https://wa.me/+918921565286"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="socialicon" />
                  </a>
                  <a href="https://x.com/kateexodus?fbclid=IwZXh0bgNhZW0CMTAAAR3Cb81n4P0T7w2RRP0pVOYcEM9lofKAql2YDxELiFItJGwfKpjh8ajgSdA_aem_AY1Yi1jlEyZ3YmqFJpXII_ZrwQGoEpcFK1tQbH6bvc3Gh2aWTGFdav3J7bgbPqPxw9JhuVCN2pK-MQRViZXElq4q ">
                    <FaXTwitter className="socialicon" />
                  </a>
                  <a href="https://www.instagram.com/kateexodus/?igsh=dW1nZzZvbmNydDBv">
                    <FaInstagram className="socialicon" />
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="col-md-6">
                <div className="mb-2">
                  <label>Full Name</label>
                </div>
                <input
                  className="inputstyle"
                  placeholder=""
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

                <div className="mt-2">
                  <label>Email</label>
                </div>
                <input
                  className="inputstyle"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

                <div className="">
                  <label>Contact Number</label>
                </div>
                <input
                  className="inputstyle"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}

                <div className="">
                  <label>Subject</label>
                </div>
                <select
                  className="inputstyle"
                  name="selectOption"
                  value={formData.selectOption}
                  onChange={handleChange}
                >
                  <option value="">Services</option>
                  <option value="immigration">
                    Immigration and Study Abroad
                  </option>
                  <option value="flight">Flight Ticket Bookings</option>
                  <option value="visitVisa">Visit Visa</option>
                  <option value="studyVisa">Study Visa</option>
                  <option value="workPermit">Work Permit</option>
                </select>
                {errors.selectOption && (
                  <p style={{color:'red'}}>{errors.selectOption}</p>
                )}

                <div className="">
                  <label>Message</label>
                </div>
                <textarea
                  className="inputstylearea"
                  placeholder=""
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p style={{color:'red'}}>{errors.message}</p>}

                <button disabled={loader} className="submitbutton" type="submit">
                  Submit
                </button>
              </form>
             
              <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Email Sent</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{userMsg}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            
            </div>
          </div>



    
        </div>

        <Footer />
      </>
    </>
  );
}
