import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <p className='text-center m-0 mb-2'>Copyright © All right reserved by Md Nazmul Hossain</p>

            <div className='text-center footer-icon'>
                <span><i className="fa fa-brands fa-facebook-f"></i></span>
                <span><i className="fa fa-brands fa-twitter"></i></span>
                <span><i className="fa fa-brands fa-instagram"></i></span>
                <span><i className="fa fa-brands fa-whatsapp"></i></span>
            </div>

        </div>
    );
};

export default Footer;