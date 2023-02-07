import React from 'react';
import AboutImg from '../assets/about-img.png'
import AboutImg2 from '../assets/about-img (1).png';

const About = () => {
    return (
        <section className='bg-secondary text-white py-32' id='about'>
          <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
         <div className='about-info'>
            <h2 className='text-6xl font-bold mb-5 border-b-[5px] w-[290px] border-[#007AFC] pb-2'>
              About Me
              </h2>
          <p className='pb-5 text-2xl'>
          Hard-working web developer with a flair for creating elegant solutions in the 
          most efficient way possible. Most recent position is with a fast-moving weather forecasting 
          startup, where I've been leading app development and spearheading the development + design of
          a React.js and Python application. As an experienced freelancer, I've built a health and 
          wellness recipe app,  a food and drink e-commerce site, a ride-share mobile app, and more. 
          Passionate about UX design, and staying on top of the latest tech trends.
          </p>
          <p className='pb-5 text-2xl'>
            Experienced with numerous technologies and languages, including Javascript, React.js, Next.js,
            Node.js, HTML, CSS, Tailwind, Styled Components, React Router, Firebase, MongoDB, and more.
          </p>

         </div>
      
         <div className='about-img'>
          <img src={AboutImg2} alt="bio image" className='w-[80%] md:ml-auto sm:justify-center'/>
         </div>
         </div>
        </section>
        )
}

export default About
