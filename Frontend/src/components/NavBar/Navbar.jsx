import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';

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

            <header>
                <div className='flex justify-between '>
                    <div>
                        <h1>ICONS</h1>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>
                                <label htmlFor="about">About</label>
                                <select name="about" id="about">
                                    <option value="about"></option>
                                    <option value="">Value1</option>
                                    <option value="">Value2</option>
                                    <option value="">Value3</option>

                                </select>
                            </li>
                            <li>what we do?</li>
                            <li>How We do?</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <Button variant="contained" href="#contained-buttons"> Donetion</Button>
                    </div>

                </div>

            </header>







        </>
    );
}

export default Navbar;
