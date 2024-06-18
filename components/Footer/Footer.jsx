import React from 'react';


import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='Footerstyle'>
    <div className=' container pt-5'>
     
<div className='row'>
<div className='col-md-4  align-items-center justify-content-center d-md-flex'>
<img src="/Logo.png" className='logstyle' alt="logo" />
</div>


<div className='col-md-4'>
<div className=''>
<div className='d-flex align-items-center d-flex'>

<RiArrowRightSLine className='footericon'/><p className="pt-3 footerstextt">Immigration and  Study Abroad</p>
</div>




<div className='d-flex align-items-center d-flex'>
<RiArrowRightSLine className='footericon'/><p className="pt-1 footerstext">Flight Ticket Bookings</p>
</div>

<div className='d-flex align-items-center d-flex'>
<RiArrowRightSLine className='footericon'/><p className="pt-1 footerstext">Visit Visa (All Countries)</p>
</div>

<div className='d-flex align-items-center d-flex'>
<RiArrowRightSLine className='footericon'/><p className="pt-1 footerstext">Study Visa</p>
</div>

<div className='d-flex align-items-center d-flex'>
<RiArrowRightSLine className='footericon'/><p className="pt-1 footerstext">Work Permit</p>
</div>

</div>


</div>



<div className='col-md-4'>
<div className=''>
<div className='d-flex align-items-center d-flex'>
<FaPhoneAlt className='footericonloco' />
<a href='tel:+91 8921565286'>
<p className="pt-1 footerstext">+91 8921565286</p>
</a>
</div>




<div className='d-flex align-items-center d-flex'>
<MdEmail className='footericonloco'/><p className="pt-1 footerstext">kateexodus@gmail.com</p>
</div>

<div className='d-flex align-items-center d-flex'>
<FaLocationDot className='footericonloco'/><p className="pt-1 footerstext">22/159-B, Kate Exodus Consultancy,<br/> Near Chelakkara Grama Panchayat,<br/> Chelakkara - 680586</p>
</div>




<a href='https://www.facebook.com/people/Kate-Exodus-Consultancy/61559892727924/?mibextid=ZbWKwL'>
<FaFacebookF className='footericonlocosocial' />
</a>
<a href="https://wa.me/+918921565286" target="_blank" rel="noopener noreferrer">
<FaWhatsapp className='footericonlocosocial'  />
</a>
<a href='https://x.com/kateexodus?fbclid=IwZXh0bgNhZW0CMTAAAR3Cb81n4P0T7w2RRP0pVOYcEM9lofKAql2YDxELiFItJGwfKpjh8ajgSdA_aem_AY1Yi1jlEyZ3YmqFJpXII_ZrwQGoEpcFK1tQbH6bvc3Gh2aWTGFdav3J7bgbPqPxw9JhuVCN2pK-MQRViZXElq4q '>
<FaXTwitter className='footericonlocosocial'  />
</a>
<a href='https://www.instagram.com/kateexodus/?igsh=dW1nZzZvbmNydDBv'>
<FaInstagram className='footericonlocosocial'  />
</a>


</div>
</div>




</div>
      

      <div className='d-flex justify-content-center align-items-center'>
     
    </div>
    






    
    </div>
    <div className='d-flex justify-content-center align-items-center mainpowered pb-3'>
    
    <p className='powered'>© 2024, Powered by Kate Exodus</p>
    
      </div>
    </div>
  );
}

export default Footer;
