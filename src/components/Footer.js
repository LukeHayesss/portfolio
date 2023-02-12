import React from 'react';
import { 
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineLinkedin 
  } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <div className='flex justify-between py-5 text-center bg-secondary text-gray-400 text-xl border-t-[1px] border-gray-700' id='footie'>
        <div className='px-4 pt-3'>
          All Rights Reserved &copy; LukeTech | Designed + Built by Me!
        </div>
      <div className=''>
    <a href="https://www.github.com/lukehayesss"
       className='pr-12 inline-block text-gray-400 hover:text-[#007AFC]'
       >
        {" "}
        <AiOutlineGithub size={45}/>{" "}
    </a>
    <a href="https://www.linkedin.com/in/luke-hayes-alexander/"
       className='pr-12 inline-block text-gray-400 hover:text-[#007AFC]'
       >
        {" "}
        <AiOutlineLinkedin size={45}/>{" "}
    </a>
    <a href="https://www.twitter.com/lukechef"
       className='pr-4 inline-block text-gray-400 hover:text-[#007AFC] mr-20'
       >
        {" "}
        <AiOutlineTwitter size={45}/>{" "}
    </a>
  </div>
    
    </div>
    </>
  )
}

export default Footer
