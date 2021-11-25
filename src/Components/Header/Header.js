import React, { useState } from 'react';
import img from '../../Images/Jsssl 2.png';
import './Header.css';
const Header = () => {
    const [isActive,setActive] =useState(false)
    function handleToggle(menu) {
        setActive(!isActive);
    }
    return (
        <div className="header">
             <div className="logo"><img src={img} alt="" /></div>
      <nav>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/training-school">Training School</a></li>
          <li><a href="/our-clients">Our Clients</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/news-event">News & Events</a></li>
        </ul>
      </nav>
      <div className="button-section">
        <button className="contact-button">Contact Us <i className="fas fa-headset"></i></button>
      </div>
      <div id="hamburger-icon" onClick={handleToggle} className={isActive&&'open'}>
        {
          isActive?<i className="fas fa-times menu-icon"></i>:<i className="fas fa-bars menu-icon "></i>
        }
      
        <ul className="mobile-menu">
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/training-school">Training School</a></li>
          <li><a href="/our-clients">Our Clients</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/news-event">News & Events</a></li>
          <button className="contact-button1"><span>Contact Us</span> <i className="fas fa-arrow-right"></i></button>
       
        </ul>
      </div>
        </div>
    );
};

export default Header;