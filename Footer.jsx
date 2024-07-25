import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpeg'
import instagram_icon from '../Assets/insta.png'
import pinterest_icon from '../Assets/pin.png'
import whatsapp_icon from '../Assets/what.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-copyright">
          <p>Copyright @ 2024 - All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
