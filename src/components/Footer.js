import React from 'react'
import logoImg from '../assets/Logo-1.png'
import AboutUs from './AboutUs'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <div className='container-fluid foo_container bg-white'>
        <div className='container'>
            <div className='row foo_row'>
                <div className='col-md-5'>
                    <img className='foo_logo mb-3' src={logoImg} alt="footer-logo" />
                    <p className='foo_txt'>GSMbid is the first company in the world to introduce LIVE AUCTION in the mobile industry and first company in the GCC to bring TIMED AUCTION for mobiles & Accessories for all renowned brands.</p>
                    <ul className='ul_social text-center'>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-youtube"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>

                <div className='col-md-2'>
                    <h4 className='foo_head mb-3'>Quick Link</h4>
                    <ul className='quick_link_ul'>
                        <li><Link to='/about-us'>About GSMbid</Link></li>
                        <li>Grading System</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='col-md-5 pe-5'>
                    <h4 className='foo_head mb-3'>Our Location</h4>
                    <iframe title='asdd' className='map_iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28863.456435500808!2d55.304452!3d25.272871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61f81a21354bc28e!2sGSM%20Bid!5e0!3m2!1sen!2sus!4v1675840886984!5m2!1sen!2sus"></iframe>

                    <ul className='location_details'>
                        <li><i className="fa-solid fa-location-dot"></i><span>1st Floor, Bahman Building, Naif, Deira, Dubai, United Arab Emirates</span></li>
                        <li><i className="fa-solid fa-phone"></i><span>+971 429 86622</span></li>
                        <li><i className="fa-solid fa-envelope"></i><span>+971 429 86622</span></li>
                    </ul>
                </div>

            </div>
            <div className='foo_copy'>
                <p className='mb-0'>GSMbid Auction Hall Co - © 2022 All Rights Reserved | Terms of Use | Privacy Policy | Refund Policy</p>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Footer