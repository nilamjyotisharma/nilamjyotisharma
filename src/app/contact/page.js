"use client"
import { useState } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import axios from "axios";
import Link from "next/link";

// export const metadata = {
//   title : 'Contact'
// }

const Page = () => {
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
    <BaseLayout>
    <>

      <div className="mx-4 md:mx-12 lg:mx-44 md:my-24">
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4'>
        <div className='col-span-1 row-span-1 md:col-span-1 md:row-span-1 text-lg space-y-8 font-semibold'>
        <div><h1 className="uppercase text-lg font-semibold">contact info</h1></div>
          <div className="flex-row space-y-12">
            
            <div className="flex justify-start space-x-2 md:space-x-4 items-center">
              <div className="p-4 bg-neutral-900 rounded-xl text-3xl"><AiOutlineMail /></div>
              <div>
                <h1 className="uppercase text-neutral-500 text-sm mb-1">Mail Us</h1>
                <h1 className="text-neutral-200 text-sm flex flex-wrap">nilamjyotisharma2000@gmail.com</h1>
                <h1 className="text-neutral-200 text-sm">u19ece1016@cit.ac.in</h1>
              </div>
            </div>
            <div className="flex justify-start space-x-2 md:space-x-4 items-center">
              <div className="p-4 bg-neutral-900 rounded-xl text-3xl"><BsTelephone /></div>
              <div>
                <h1 className="uppercase text-neutral-500 text-sm mb-1">Contact Us</h1>
                <h1 className="text-neutral-200 text-sm">+91813-407-3403</h1>
                <h1 className="text-neutral-200 text-sm">+91936-534-4244</h1>
              </div>
            </div>
            <div className="flex justify-start space-x-4 items-center">
              <div className="p-4 bg-neutral-900 rounded-xl text-3xl"><IoLocationOutline /></div>
              <div>
                <h1 className="uppercase text-neutral-500 text-sm mb-1">Location</h1>
                <h1 className="text-neutral-200 text-sm">Jagiroad</h1>
                <h1 className="text-neutral-200 text-sm">Morigaon,Assam</h1>
              </div>
            </div>
          </div>
          <div>
            <div><h1 className="uppercase text-lg font-semibold">Social Info</h1></div>
            <div className="flex justify-start space-x-4 mt-12 text-2xl md:text-[3rem]">
            <Link href='https://www.linkedin.com/in/nilam-jyoti-sharma-2912681aa/' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white p-4 rounded-2xl bg-neutral-900'><BsLinkedin /></div>
              </Link>
              <Link href='https://github.com/nilamjyotisharma' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white p-4 rounded-2xl bg-neutral-900'><BsGithub /></div>
              </Link>
              <Link href='https://www.instagram.com/___nilam.____/' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white p-4 rounded-2xl bg-neutral-900'><BsInstagram /></div>
              </Link>
              <Link href='https://www.facebook.com/nilamjyoti.sharma/' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white p-4 rounded-2xl bg-neutral-900'><BsFacebook /></div>
              </Link>
            </div>
          </div>
        </div>
        <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#2e2e2e] to-[#191919] col-span-1 row-span-1 md:col-span-1 md:row-span-1'>
          <div className='px-8 py-12'>
            <div><h1 className='font-extrabold text-xl lg:text-5xl'>Lets <span className='text-gray-600'>Work Together</span></h1></div>

            <div className="flex-row justify-start space-y-2 mt-8">
              <div>
              
              <input type='text' placeholder='Name' required onChange={(e) => setName(e.target.value)} value={name} className='rounded-xl bg-[#2e2e2e] duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><input type='text' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-xl bg-[#2e2e2e] duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><input type='number' placeholder='Phone' required onChange={(e) => setPhone(e.target.value)} value={phone} className='rounded-xl bg-[#2e2e2e] duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><textarea placeholder='Message' required onChange={(e) => setMessage(e.target.value)} value={message} className='rounded-xl bg-[#2e2e2e] duration-200 hover:scale-95 py-4 focus:outline-none w-full px-6' /></div>

              <div><button onClick={handleSubmit} className='rounded-xl border-neutral-900 font-medium text-sm duration-200 hover:scale-95 bg-[#2e2e2e] px-8 py-4 hover:bg-white hover:text-black'>Send Message</button></div>

            </div>
            
          </div>
        </div>
      </div>

      </div>

      


    </>
    </BaseLayout>
  )
}

export default Page