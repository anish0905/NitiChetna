import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../Blogs/posts';
import ContactForm from '../contacts/ContectForm';

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
         <div className=' text-justify'>
         <h2 className='text-center'>{post.title}</h2>
          <p className="post-date ">{post.date}</p>
          <p className='mx-10'>{post.content}</p>
         </div>
        </div>

   <ContactForm/>
    </div>
  );
};

export default Post;
