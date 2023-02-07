import React from 'react';
import Edu from '../assets/Luke Hayes-Alexander-1.png'

const Education = () => {
    return (
<section className='bg-secondary text-white py-32' id='education'>
          <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
         <div className='about-info'>
            <h2 className='text-6xl font-bold mb-5 border-b-[5px] w-[290px] border-[#007AFC] pb-2'>
              Education
              </h2>
          <p className='pb-5 text-3xl'>
            Graduated from the intense and rigorous full stack web developer program at Concordia University in June 2022.
          </p>
          <p className='pb-5 text-3xl text-gray-400'>
            Technologies covered: Javascript, React.js, Node.js, Express, MongoDB, HTML/CSS, Firebase, 
            Github, Insomnia, API's, DOM Manipulation, + more.
          </p>

         </div>
      
         <div className='edu-img'>
          <img src={Edu} alt="edu image" className='w-[80%] md:ml-auto mr-3'/>
         </div>
         </div>
        </section>
        )
}

export default Education
