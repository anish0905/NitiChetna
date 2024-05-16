import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Home'


import PostDetail from './components/Blogs/PostDetail';

function App() {
  return (
    <div>


      <Router>

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>

      </Router>
    </div>
  );
}

export default App;
