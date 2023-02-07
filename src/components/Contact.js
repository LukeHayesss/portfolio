import React from 'react';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

const Contact = () => {
  return (
    <section className='bg-primary pt-32 pb-10 pr-50' id='contact'>
    <div className='text-center md:w-[60%] mx-auto text-white'>
      <h1 className='text-6xl sm:text-sm font-bold mb-5 border-b-[5px] w-[550px] mx-auto border-[#007AFC] pb-2'>
        Ready to get started?
    </h1>
    <section className='pt-5'>
    <p className='text-3xl py-5 text-gray-400'>
        Drop me a line or give me a call about your project.
    </p>
    </section>
    <p className='py-2 text-2xl flex justify-center'>
        <AiOutlineMail size={32} className='mr-2'/> <a href="mailto:lukehayesa@gmail.com"><span className='hover:underline'>lukehayesa@gmail.com</span></a>
    </p>
    <p className='py-2 text-2xl flex justify-center'>
        <AiOutlinePhone size={32} className='mr-2'/> 647-567-2477
    </p>
    <p className='py-2 text-2xl flex justify-center'>
        <ImLocation size={32} className='mr-2'/> Toronto, ON
    </p>
    </div>
    </section>
  )
}


export default Contact
