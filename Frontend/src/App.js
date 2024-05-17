import React from 'react';

import './App.css';

import { Outlet } from 'react-router-dom';



import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div>

  

      <Navbar />
      <Outlet/>

      <Footer/> 
      
    </div>
  );
}

export default App;
