"use client"
import { useState } from "react";
import React from 'react'
import axios from "axios";
import Link from "next/link";


const ContactForm = () => {

const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    // console.log(name, email, phone, message);
    e.preventDefault();
    const data = {
      Name:name,
      Email:email,
      Phone:phone,
      Message:message,
    }
    axios.post('https://sheetdb.io/api/v1/kzs84wrun0c1z', data).then((response) => {
      console.log(response);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    })
  }



  return (
    <>

<div className='px-8 py-12'>
            <div><h1 className='font-extrabold text-xl lg:text-5xl'>Lets <span className='text-gray-600'>Work Together</span></h1></div>

            <div className="flex-row justify-start space-y-2 mt-8">
              <div>
              
              <input type='text' placeholder='Name' required onChange={(e) => setName(e.target.value)} value={name} className='rounded-xl dark:bg-[#2e2e2e] bg:white duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><input type='text' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-xl dark:bg-[#2e2e2e] bg-white duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><input type='number' placeholder='Phone' required onChange={(e) => setPhone(e.target.value)} value={phone} className='rounded-xl dark:bg-[#2e2e2e] bg-white duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><textarea placeholder='Message' required onChange={(e) => setMessage(e.target.value)} value={message} className='rounded-xl dark:bg-[#2e2e2e] bg-white duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><button onClick={handleSubmit} className='rounded-xl border-neutral-900 font-medium text-sm duration-200 hover:scale-95 dark:bg-[#2e2e2e] bg-white px-8 py-4 hover:bg-white hover:text-black'>Send Message</button></div>

            </div>
            
          </div>

    </>
  )
}

export default ContactForm