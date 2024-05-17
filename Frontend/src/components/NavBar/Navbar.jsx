import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavbarModal from '../module/NavbarModal';
import logo from '../assets/images/logoNav.png';

const Navbar = () => {
  return (
    <>
      <header className='bg-slate-950 py-2 text-white'>
        <div className='container mx-auto'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div className="mb-2 sm:mb-0">
              <h3 className='text-xl font-bold '>नीति चेतना फाउंडेशन</h3>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center'>
                <PhoneIcon className='mr-1' />
                <span>+91-9667060683</span>
              </div>
              <span>|</span>
              <div className='flex items-center'>
                <EmailIcon className='mr-1' />
                <span>info@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='bg-gray-100 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div>
            <img src={logo} alt="Logo" className='w-28' />
            <h1 className='text-2xl font-bold'>  </h1>
          </div>
          <div>
            <ul className=' space-x-8 lg:flex md:flex hidden '>
              <li><a href="http://localhost:3000" className="aux-item-content flex items-center no-underline">Home</a></li>
              <li className='relative group'>
                <a href="http://localhost:3000/about" className="aux-item-content flex items-center no-underline">
                  <span>About</span>
                  <span><KeyboardArrowDownIcon /></span>
                </a>
                <ul className='absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2 w-52  z-50 no-underline'>
                  <li><a href="http://localhost:3000/about" className="block px-4 py-2 no-underline hover:bg-green-300 hover:text-cyan-50 w-48">About Us</a></li>
                  <li><a href="http://localhost:3000/boardofdirection" className="block px-4 py-2  hover:bg-green-300  hover:text-cyan-50 w-48 no-underline">Board of Directors</a></li>
                  <li><a href="http://localhost:3000/boardofadvisiory" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50 w-48 no-underline">Board of Advisory</a></li>
                </ul>
              </li>
              <li>What we do?</li>
              <li className='relative group'>
                <a href="https://nitichetna.com/contact/" className="aux-item-content flex items-center no-underline">
                  <span>Contact</span>
                  <span><KeyboardArrowDownIcon /></span>
                </a>
                <ul className='absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2 w-48 z-50 no-underline'>
                  <li><a href="http://localhost:3000/blogspag" className="block px-4 py-2 hover:bg-green-300 no-underline hover:text-cyan-50	">Blogs</a></li>
                  <li><a href="http://localhost:3000/contactpag" className="block px-4 py-2 hover:bg-green-300 no-underline	 hover:text-cyan-50">Contact US</a></li>
                  <li><a href="http://localhost:3000/volunteer" className="block px-4 py-2 hover:bg-green-300 no-underline	 hover:text-cyan-50">Volunteel</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="https://pages.razorpay.com/pl_NUjg9PlvR8znaV/view" className="bg-green-300 hover:bg-green-400 no-underline text-black font-bold py-2 px-4 rounded">Donation</a>
          <div className='lg:hidden md:hidden   h-full flex justify-center con items-center w-10'>
            <NavbarModal />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
