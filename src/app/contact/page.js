
import BaseLayout from "@/layouts/BaseLayout";
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import Link from "next/link";
import ContactForm from "@/components/contactForm";

// export const metadata = {
//   title : 'Contact'
// }

const Page = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   // console.log(name, email, phone, message);
  //   e.preventDefault();
  //   const data = {
  //     Name:name,
  //     Email:email,
  //     Phone:phone,
  //     Message:message,
  //   }
  //   axios.post('https://sheetdb.io/api/v1/kzs84wrun0c1z', data).then((response) => {
  //     console.log(response);
  //     setName('');
  //     setEmail('');
  //     setPhone('');
  //     setMessage('');
  //   })
  // }

  return (
    <BaseLayout>
    <>

      <div className="mx-4 md:mx-12 lg:mx-44 md:my-24">
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4'>
        <div className='col-span-1 row-span-1 md:col-span-1 md:row-span-1 text-lg space-y-8 font-semibold'>
        <div><h1 className="uppercase text-white text-lg font-semibold">contact info</h1></div>
          <div className="flex-row space-y-12">
            
            <div className="flex justify-start space-x-2 md:space-x-4 items-center">
              <div className="p-4 text-white dark:text-neutral-300 dark:bg-neutral-900 bg-white/30 rounded-xl text-3xl"><AiOutlineMail /></div>
              <div>
                <h1 className="uppercase dark:text-neutral-500 text-white text-sm mb-1">Mail Us</h1>
                <Link href={"mailto:nilamjyotisharma2000@gmail.com"}><h1 className="text-neutral-200 text-sm flex flex-wrap">nilamjyotisharma2000@gmail.com</h1></Link>
                <Link href={"mailto:u19ece1016@cit.ac.in"}><h1 className="text-neutral-200 text-sm">u19ece1016@cit.ac.in</h1></Link>
              </div>
            </div>
            <div className="flex justify-start space-x-2 md:space-x-4 items-center">
              <div className="p-4 text-white dark:text-neutral-300 dark:bg-neutral-900 bg-white/30 rounded-xl text-3xl"><BsTelephone /></div>
              <div>
                <h1 className="uppercase ark:text-neutral-500 text-white text-sm mb-1">Contact Us</h1>
                <Link href={"tel:+918134073403"}><h1 className="text-neutral-200 text-sm">+91813-407-3403</h1></Link>
                <Link href={"tel:+919365344244"}><h1 className="text-neutral-200 text-sm">+91936-534-4244</h1></Link>
              </div>
            </div>
            <div className="flex justify-start space-x-4 items-center">
              <div className="p-4 text-white dark:text-neutral-300 dark:bg-neutral-900 bg-white/30 rounded-xl text-3xl"><IoLocationOutline /></div>
              <div>
                <h1 className="uppercase ark:text-neutral-500 text-white text-sm mb-1">Location</h1>
                <h1 className="text-neutral-200 text-sm">Jagiroad</h1>
                <h1 className="text-neutral-200 text-sm">Morigaon,Assam</h1>
              </div>
            </div>
          </div>
          <div>
            <div><h1 className="uppercase text-white text-lg font-semibold">Social Info</h1></div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-8 text-4xl md:text-[3rem]">
            <Link href='https://www.linkedin.com/in/nilam-jyoti-sharma-2912681aa/' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-white dark:text-neutral-300 hover:text-white p-4 rounded-2xl dark:bg-neutral-900 bg-white/30'><BsLinkedin /></div>
              </Link>
              <Link href='https://github.com/nilamjyotisharma' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-white dark:text-neutral-300 hover:text-white p-4 rounded-2xl dark:bg-neutral-900 bg-white/30'><BsGithub /></div>
              </Link>
              <Link href='https://www.instagram.com/___nilam.____/' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-white dark:text-neutral-300 hover:text-white p-4 rounded-2xl dark:bg-neutral-900 bg-white/30'><BsInstagram /></div>
              </Link>
              <Link href='https://www.facebook.com/nilamjyoti.sharma/' target='blank'>
              <div className='duration-200 hover:scale-110 cursor-pointer text-white dark:text-neutral-300 hover:text-white p-4 rounded-2xl dark:bg-neutral-900 bg-white/30'><BsFacebook /></div>
              </Link>
            </div>
          </div>
        </div>
        <div className='rounded-3xl dark:border-2 dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] col-span-1 row-span-1 md:col-span-1 md:row-span-1'>
          

          <ContactForm />
        </div>
      </div>

      </div>

      


    </>
    </BaseLayout>
  )
}

export default Page