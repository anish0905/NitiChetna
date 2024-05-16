import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../Blogs/posts';

const PostList = () => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
    {posts.map(post => (
      <div key={post.id} className="mid-w-md rounded gap-4  shadow-lg">
        <img src={post.image} alt={post.title} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.excerpt}</p>
          <p className="text-gray-600 text-sm mt-2">{post.date}</p>
        </div>
        <div className="px-6 py-4">
          <Link to={`/post/${post.id}`} className=" hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Read More
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default PostList;
