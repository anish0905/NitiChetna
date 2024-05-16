import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../Blogs/posts';

const Post = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="post m-12   ">
    
        <div className=' flex justify-center items-center content-center'>
          <div>
            <img src={post.image} alt={post.title} className="post-image " />
          </div>

        </div>
        <div className=' flex justify-center items-center content-center text-center ' >
         <div>
         <h2>{post.title}</h2>
          <p className="post-date">{post.date}</p>
          <p className='mx-10'>{post.content}</p>
         </div>
        </div>

   
    </div>
  );
};

export default Post;
