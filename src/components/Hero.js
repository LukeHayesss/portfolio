import React from 'react';
import HeroImg from '../assets/hero-img.png';
import HeroProfile from '../assets/hero-profile.png';

import { 
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin 
} from 'react-icons/ai';
import { Cursor, TypeWriter, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  
const [text, count] = useTypewriter({
    words: [
      'full stack web dev', 
      'frontend expert',
      'app builder', 
      'UX/UI designer',
    ],
    loop: true,
    delaySpeed: 2000,
})

  return (
  <section className='bg-primary text-white py-32'>
    <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>

   <div className='hero-info pb-5 md:pb-0'>
    <h1 className='text-5xl lg:text-7xl'>
        Hi! <br />
        I'm Luke, <br />
        <span>{text}</span>
        <Cursor cursorColor='#ffffff' cursorBlinking='true'/>
    </h1>
    <p className='py-5 text-3xl text-gray-400'>full stack web developer with years of experience</p>

      
    <div className='flex py-5'>
      <a href="https://www.github.com/lukehayesss"
         className='pr-12 inline-block text-accent hover:text-white'
         >
          {" "}
          <AiOutlineGithub size={45}/>{" "}
      </a>
      <a href="https://www.linkedin.com/in/luke-hayes-alexander/"
         className='pr-12 inline-block text-accent hover:text-white'
         >
          {" "}
          <AiOutlineLinkedin size={45}/>{" "}
      </a>
      <a href="https://www.twitter.com/lukechef"
         className='pr-4 inline-block text-accent hover:text-white'
         >
          {" "}
          <AiOutlineTwitter size={45}/>{" "}
      </a>
    </div>
    <div className='py-5'>
    <a href="#projects" className='btn rounded-full bg-accent border-2 border-[#007AFC] text-white px-10 py-3 hover:bg-transparent text-2xl font-semibold'>
      See Projects
    </a>
   </div>
   </div>

   <div className='hero-img'>
    <img src={HeroProfile} alt="coding illustration" className='w-[80%] ml-auto'/>
   </div>
   </div>
  </section>
  )
}

export default Hero
