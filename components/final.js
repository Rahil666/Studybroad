import React, { useState, useEffect } from 'react';

export default function Final() {
  const [index, setIndex] = useState(0);

  // Define the number of carousel items (assuming 3 in this case)
  const numItems = 3;

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
    }, 3000); // Change slide every 3 seconds (adjust as needed)

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
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="card">
                        <img className="img-fluidd" alt="100%x280" src="/job1.jpg" />
                     
                      </div>
                    </div>

                    <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluidd" alt="100%x280" src="/job2.jpg" />
                   
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                  <div className="card">
                    <img className="img-fluidd" alt="100%x280" src="/job3.jpg" />
                 
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                <div className="card">
                  <img className="img-fluidd" alt="100%x280" src="/job4.jpg" />
               
                </div>
              </div>
                  </div>
                </div>
                <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
                  <div className="row">
                  <div className="col-md-3 mb-3">
                  <div className="card">
                    <img className="img-fluidd" alt="100%x280" src="/job1.jpg" />
                 
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                <div className="card">
                  <img className="img-fluidd" alt="100%x280" src="/job4.jpg" />
               
                </div>
              </div>
              <div className="col-md-3 mb-3">
              <div className="card">
                <img className="img-fluidd" alt="100%x280" src="/job2.jpg" />
             
              </div>
            </div>
            <div className="col-md-3 mb-3">
            <div className="card">
              <img className="img-fluidd" alt="100%x280" src="/job3.jpg" />
           
            </div>
          </div>
                  </div>
                </div>
                <div className={`carousel-item ${index === 2 ? 'active' : ''}`}>
                  <div className="row">
                  <div className="col-md-3 mb-3">
                  <div className="card">
                    <img className="img-fluidd" alt="100%x280" src="/job4.jpg" />
                 
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                <div className="card">
                  <img className="img-fluidd" alt="100%x280" src="/job2.jpg" />
               
                </div>
              </div>
              <div className="col-md-3 mb-3">
              <div className="card">
                <img className="img-fluidd" alt="100%x280" src="/job3.jpg" />
             
              </div>
            </div>
            <div className="col-md-3 mb-3">
            <div className="card">
              <img className="img-fluidd" alt="100%x280" src="/job1.jpg" />
           
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
