import React from 'react';
import {useForm} from "react-hook-form";


const ContactForm = () => {
  const {register, handleSubmit,} = useForm();
  const onSubmit = formData => {
    window.location.href = `mailto:lukehayesa@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className='bg-primary' id="form">
        <form 
           onSubmit={handleSubmit(onSubmit)} 
           className='flex flex-col space-y-2 w-fit mx-auto'
           >
            <div className='flex space-x-2'>
                <input 
                {...register('name')} 
                placeholder="Name" 
                className="contactInput" 
                type="text"
                />
                <input 
                {...register('email')} 
                placeholder="Email" 
                className="contactInput" 
                type="email"
                />
                </div>
                <input 
                {...register('subject')} 
                placeholder="Subject" 
                className="contactInput" 
                type="text"
                />
                <textarea 
                {...register('message')} 
                placeholder="Message" 
                className='contactInput'
                />
                <button 
                type="submit" 
                className='text-white bg-[#007AFC] py-5 px-10 rounded-full font-bold hover:bg-[#3195FF] text-2xl' id="buttony">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm