import React from 'react';
import BlogsHome from '../components/Blogs/BlogsHome';
import imageFirst from '../components/assets/images/Lekarenprotected.jpg';

const BlogsPag = () => {
  return (
    <div>
    <div className="relative">
      <div
        className="w-full h-64 bg-cover bg-center mt-5 mb-5"
        style={{ backgroundImage: `url(${imageFirst})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <nav className="space-x-4 text-white text-lg">
            <h1>Blogs</h1>
            <a href="/" className="hover:underline text-white">Home</a>
            <a href="http://localhost:3000/blogspag " className="hover:underline text-white">Blogs</a>
          </nav>
        </div>
      </div>
    </div>

<BlogsHome />
    </div>
  );
};

export default BlogsPag;



