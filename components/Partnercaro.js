import React, { useState, useEffect } from 'react';

export default function Partnercaro() {
  const [index, setIndex] = useState(0);

  // Define the number of carousel items (assuming 3 in this case)
  const numItems = 1;

  // Function to handle next slide
  const handleNext = () => {
    setIndex((index + 1) % numItems); // Use modulo to wrap around
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setIndex((index - 1 + numItems) % numItems); // Ensure positive index with modulo
  };

  // Auto loop interval setup
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 13000); // Change slide every 3 seconds (adjust as needed)

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [index]); // Depend on index to reset interval when index changes

  return (
    <section className="pt-5 pb-5">
     
      <div className='col-12 d-flex align-items-center'>
      <div className=" mb-3 mr-1" onClick={handlePrev}>
      <img className="lefticon" alt="100%x280" src="left.png" />
    </div>
      <div className="col text-right">
      <div className="container">
        <div className="row">
        
        
          
          </div>
          <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel " data-ride="carousel">
              <div className="carousel-inner">
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="card slide">
                        <img className="img-fluiddparr" alt="no preview" src="/Uni1.jpg" />
                        <div class="">
                        <h4 class="">SISH, SINGAPORE</h4>
                        <p class="">Course 1: Diploma in Hospitality Operations Course 2: Diploma in Aviation And Travel Operations Qualification: 10th/12th Pass Age limit: 45 Years</p>

                    </div>
                      </div>
                      
                    </div>

                    <div className="col-md-3 mb-3">
                    <div className="card slide">
                    <img className="img-fluiddparr" alt="no preview" src="/Uni2.jpg" />
                   
                    <div class="">
                    <h4 class="">BIRMINGHAM ACADEMY, SINGAPORE</h4>
                    <p class="">Course: Diploma in Hospitality And Advanced Diploma in Hospitality Qualification: 10th/12th Pass Age limit: 45 Years</p>

                </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                  <div className="card slide">
                  <img className="img-fluiddparr" alt="no preview" src="/Uni3.jpg" />
              

                  <div class="">
                  <h4 class="">ERC INSTITUTE, SINGAPORE</h4>
                  <p class="">Course: Diploma in Hospitality Qualification: 10th/12th Pass Age limit: 45 Years</p>

              </div>

                  </div>
                 
                </div>
                <div className="col-md-3 mb-3">
                <div className="card slide">
                <img className="img-fluiddparr" alt="no preview" src="/Uni4.jpg" />
                <div class="">
                <h4 class="">TRENT GLOBAL COLLEGE, SINGAPORE</h4>
                <p class="">Course 1: Diploma in Food Technology & Catering (DFTC) Course 2: Advanced Diploma in Food Technology & Operations (ADFTO) Course 3: Diploma in Building Services Management (DBSM) Qualification: 10th/12th Pass Age limit: 45 Years</p>

            </div>
                </div>
              </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>

          </div>
        </div>
        <div className=" mb-3" onClick={handleNext}>
        <img className="lefticon" alt="100%x280" src="right.png" />
      </div>
   
      </div>
    </section>
  );
}
