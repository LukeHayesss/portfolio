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
          Experienced UX/UI Designer and full-stack web developer with a flair for creating elegant solutions. 
          Most recent position is with a fast-moving weather forecasting startup, where I've been leading 
          app development of a weather forecasting platform. As an experienced freelancer, I've built a health and wellness recipe app, 
          a food and drink e-commerce site, a ride-share mobile app, and more. Passionate about UX design, 
          and staying on top of the latest tech trends.
          </p>
          <p className='pb-5 text-2xl'>
            Experienced with numerous technologies and languages, including UX/UI Design, Figma, Javascript, 
            React.js, Next.js, Node.js, HTML, CSS, Tailwind, Styled Components, React Router, Firebase, MongoDB, 
            and more. Knowledgeable about Agile and Scrum methods.
          </p>

         </div>
      
         <div className='about-img'>
          <img src={AboutImg2} alt="bio image" className='w-[80%] md:ml-auto mr-3'/>
         </div>
         </div>
        </section>
        )
}

export default About
