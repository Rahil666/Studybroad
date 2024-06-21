import React from 'react';


const Header = () => {
  return (
    <div className=" d-flex align-items-center headermain pt-2">
      
   
    <div className='container'>
      <div className='col-12 '>
        <div className='row'>
          <div className='col-4 align-items-center justify-content-center d-flex '>
            <img src="/Logo.png" className='logstyle' alt="logo" />
          </div>
          <div className='col-7  hiddennav  '>
            <div className='col-12'>
              <div className='row'>
                <div className='col-4'>
                  <p className='navstylee'>HOME</p>
                </div>
                <div className='col-4'>
                  <p className='navstylee'>ABOUT US</p>
                </div>
                <div className='col-4 header-menu'>
                  <p className="services navstylee">SERVICES</p>
                  <div className="services-menu">
                  <a href="https://wa.me/+918921565286" target="_blank" rel="noopener noreferrer">
                    <p>Immigration and  Study Abroad</p>
                    <p>Flight Ticket Bookings</p>
                    <p>Visit Visa (All Countries)</p>
                    <p>Study Visa</p>
                    <p>Work Permit</p>
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a  href='/#contactus' className='buttonstylcontact '>
    <div >

    <p className='contactustext '>Contact Us</p>
   
    </div>
    </a>
    </div>
  );
}

export default Header;
