import React from 'react';
import blog1 from '../assets/blog1.png';

const Blog = () => {
    return (
        <section className='bg-secondary text-white py-32' id='blog'>
          <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
         <div className='about-info mb-5'>
            <h2 className='text-6xl font-bold mb-5 border-b-[5px] w-[130px] border-[#007AFC] pb-2'>
                Blog
            </h2>
          <p className='pb-5 text-2xl'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
          </p>
         </div>
      
         <div className='hero-img'></div>
         </div>

         <div className='projects container mx-auto grid md:grid-cols-2 gap-10'>
            <div className=''>
                <img src={blog1} alt="blog image"/>
                <h3 className='py-5 text-2xl'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
               </h3>
               <button className='btn rounded-full bg-accent border-2 border-[#007AFC] text-white px-10 py-3 hover:bg-transparent text-2xl font-semibold'>
                Read More
               </button>
            </div>
            <div className=''>
                <img src={blog1} alt="blog image"/>
                <h3 className='py-5 text-2xl'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
               </h3>
               <button className='btn rounded-full bg-accent border-2 border-[#007AFC] text-white px-10 py-3 hover:bg-transparent text-2xl font-semibold'>
                Read More
               </button>
            </div>
         </div>
        </section>
    )
}

export default Blog
