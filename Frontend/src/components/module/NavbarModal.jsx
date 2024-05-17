import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaBars } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import BootstrapDialog from '@mui/material/Dialog';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function NavbarModal() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FaBars />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)' 
          }} 
          onClick={handleClose}
        ></div>
        
        <div 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'white', 
            padding: '20px',
            width: '100%', 
            height: '100%',
            overflowY: 'auto' // Ensure content is scrollable
          }}
        >
          <IconButton 
            aria-label="close" 
            onClick={handleClose} 
            style={{ 
              position: 'absolute', 
              top: 20, 
              left: "45%" 
            }}
          >
            <CloseIcon />
          </IconButton>
          <ul className='text-black p-20 text-2xl'>
            <li className="no-underline"><a href="http://localhost:3000">Home</a></li>
            <li className='relative'>
              <div 
                className="aux-item-content flex items-center cursor-pointer" 
                onClick={() => handleDropdownToggle('about')}
              >
                <span>About</span>
                <KeyboardArrowDownIcon />
              </div>
              <ul 
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openDropdown === 'about' ? 'max-h-screen' : 'max-h-0'}`}
              >
                <li><a href="http://localhost:3000/about" className="block px-4 py-2 hover:bg-green-300 hover:text-cyan-50 text-black">About Us</a></li>
                <li><a href="http://localhost:3000/boardofdirection" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Board of Directors</a></li>
                <li><a href="http://localhost:3000/boardofadvisiory" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Board of Advisory</a></li>
              </ul>
            </li>
            <li>What we do?</li>
            <li className='relative'>
              <div 
                className="aux-item-content flex items-center cursor-pointer" 
                onClick={() => handleDropdownToggle('contact')}
              >
                <span>Contact</span>
                <KeyboardArrowDownIcon />
              </div>
              <ul 
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openDropdown === 'contact' ? 'max-h-screen' : 'max-h-0'}`}
              >
                <li><a href="http://localhost:3000/blogspag" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Blogs</a></li>
                <li><a href="http://localhost:3000/contactpag" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Contact Us</a></li>
                <li><a href="http://localhost:3000/volunteer" className="block px-4 py-2 hover:bg-green-300  hover:text-cyan-50">Volunteer</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}
