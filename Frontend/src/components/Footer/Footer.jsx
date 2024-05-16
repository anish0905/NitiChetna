import React from 'react';
import footerImg from '../assets/images/footerImg.png';
import './footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <div className='footer-container bg-customGreen'>
            <div className='footer-content'>
                <div>
                    <img src={footerImg} alt="" />
                    <h3>Niti Chetna Foundation</h3>
                    <h3>नीति चेतना फाउंडेशन</h3>
                </div>
                <div className="footer-column">
                    <ul>
                        <h2>Policy</h2>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Donation Policy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h2>NGO</h2>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h2>Contact</h2>
                        <li>+91 96670 60683</li>
                        <li>info@nitichetna.com</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h2>Address</h2>
                        <li>Kalka ji, New Delhi</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
