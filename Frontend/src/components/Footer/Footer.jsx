import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../assets/images/footerImg.png';
import './footer.css'; // Import CSS file for styling
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  return (
    <div className='footer-container bg-customGreen mt-10'>
      <div className='footer-content'>
        <div>
          <img src={footerImg} alt="Niti Chetna Foundation" />
          <h3>Niti Chetna Foundation</h3>
          <h3>नीति चेतना फाउंडेशन</h3>
        </div>

        <div className="container mx-auto p-4">
          {/* Large screen layout */}
          <div className="hidden lg:flex lg:justify-between">
            <div className="footer-column lg:w-1/4 mb-4 lg:mb-0">
              <ul>
                <h2 className="text-xl font-bold mb-2">Policy</h2>
                <li className="mb-1"><Link to="#">Privacy Policy</Link></li>
                <li className="mb-1"><Link to="#">Terms & Conditions</Link></li>
                <li className="mb-1"><Link to="#">Donation Policy</Link></li>
              </ul>
            </div>
            <div className="footer-column lg:w-1/4 mb-4 lg:mb-0">
              <ul>
                <h2 className="text-xl font-bold mb-2">NGO</h2>
                <li className="mb-1"><Link to="/">Home</Link></li>
                <li className="mb-1"><Link to="/about">About</Link></li>
                <li className="mb-1"><Link to="/contactpag">Contact</Link></li>
                <li className="mb-1"><Link to="/blogspag">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-column lg:w-1/4 mb-4 lg:mb-0">
              <ul>
                <h2 className="text-xl font-bold mb-2">Contact</h2>
                <li className="mb-1"><a href="tel:+919667060683">+91 96670 60683</a></li>
                <li className="mb-1"><a href="mailto:info@nitichetna.com">info@nitichetna.com</a></li>
              </ul>
            </div>
            <div className="footer-column lg:w-1/4 mb-4 lg:mb-0">
              <ul>
                <h2 className="text-xl font-bold mb-2">Address</h2>
                <li className="mb-1"><Link to="#">Kalka ji, New Delhi</Link></li>
              </ul>
            </div>
          </div>

          {/* Small screen layout */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
            <div className='flex'>
              {/* First row */}
              <div className="footer-column mb-4">
                <ul>
                  <h2 className="text-xl font-bold mb-2">Policy</h2>
                  <li className="mb-1"><Link to="#">Privacy Policy</Link></li>
                  <li className="mb-1"><Link to="#">Terms & Conditions</Link></li>
                  <li className="mb-1"><Link to="#">Donation Policy</Link></li>
                </ul>
              </div>
              <div className="footer-column mb-4">
                <ul>
                  <h2 className="text-xl font-bold mb-2">NGO</h2>
                  <li className="mb-1"><Link to="/">Home</Link></li>
                  <li className="mb-1"><Link to="/about">About</Link></li>
                  <li className="mb-1"><Link to="/contactpag">Contact</Link></li>
                  <li className="mb-1"><Link to="/blogspag">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className='flex'>
              {/* Second row */}
              <div className="footer-column mb-4">
                <ul>
                  <h2 className="text-xl font-bold mb-2">Contact</h2>
                  <li className="mb-1"><a href="tel:+919667060683">+91 96670 60683</a></li>
                  <li className="mb-1"><a href="mailto:info@nitichetna.com">info@nitichetna.com</a></li>
                </ul>
              </div>
              <div className="footer-column mb-4">
                <ul>
                  <h2 className="text-xl font-bold mb-2">Address</h2>
                  <li className="mb-1"><Link to="#">Kalka ji, New Delhi</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <p className="text-center lg:text-left">Copyright © 2024 Niti Chetna Foundation. All rights reserved.</p>
        </div>
        <div className="text-xl">
          <FacebookOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
