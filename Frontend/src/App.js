import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Home'


import PostDetail from './components/Blogs/PostDetail';
import About from './pages/About';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Boardofdirectors from './pages/Boardofdirectors';
import Boardofadvisiory from './pages/Boardofadvisiory'
import BlogsPag from './pages/BlogsPag';
import ContactPag from './pages/ContactPag';
import Volunteer from './pages/Volunteer';



function App() {
  return (
    <div>

  

      <Navbar />
      <Router>

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/boardofdirection" element={<Boardofdirectors />} />
            <Route path="/boardofadvisiory" element={<Boardofadvisiory />} />
            <Route path="/blogspag" element={<BlogsPag />} />

            <Route path="/contactpag" element={<ContactPag />} />
            <Route path="/volunteer" element={<Volunteer/>} />

          </Routes>
        </main>

      </Router>

      <Footer/> 
      
    </div>
  );
}

export default App;
