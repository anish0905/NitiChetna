import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
    return (
        <>
            <header className='bg-slate-950 py-2 text-white' >
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='text-xl font-bold '>नीति चेतना फाउंडेशन</h3>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div className='flex items-center'>
                                <PhoneIcon className='mr-1' />
                                <span>+91-9667060683</span>
                            </div>
                            <span>|</span>
                            <div>
                                <EmailIcon className='mr-1' />
                                <span>@info@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <header className='bg-gray-100 py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>ICONS</h1>
                </div>
                <div>
                    <ul className='flex space-x-8'>
                        <li>Home</li>
                        <li className='relative group'>
                            <a href="https://nitichetna.com/about/" className="aux-item-content flex items-center">
                                <span>About</span>
                                <span><KeyboardArrowDownIcon/></span>
                            </a>
                            <ul className='absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2 w-48'>
                                <li><a href="#about-us" className="block px-4 py-2 hover:bg-green-300 hover:text-cyan-50">About Us</a></li>
                                <li><a href="#board-of-directors" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Board of Directors</a></li>
                                <li><a href="#board-of-advisory" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Board of Advisory</a></li>
                            </ul>
                        </li>
                        <li>What we do?</li>
                        <li className='relative group'>
                            <a href="https://nitichetna.com/contact/" className="aux-item-content flex items-center">
                                <span>Contact</span>
                                <span><KeyboardArrowDownIcon/></span>
                            </a>
                            <ul className='absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2 w-48'>
                                <li><a href="#contact-form" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50	">Blogs</a></li>
                                <li><a href="#location" className="block px-4 py-2 hover:bg-green-300	 hover:text-cyan-50">Contact US</a></li>
                                <li><a href="#support" className="block px-4 py-2 hover:bg-green-300	 hover:text-cyan-50">Volunteel</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <Button variant="contained" href="#contained-buttons">Donation</Button>
                </div>
            </div>
        </header>






        </>
    );
}

export default Navbar;
