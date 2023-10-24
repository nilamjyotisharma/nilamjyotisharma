import SkilllComponent from '@/components/skillComponent'
import BaseLayout from '@/layouts/BaseLayout'
import React from 'react'
import CertificateCard from '@/components/certificateCard'
import Credent from '@/components/credent'
import ServiceCards from '@/components/serviceCard'
import Cards from '@/components/cards'



export const metadata = {
    title : 'Certificates'
  }

const Skill = () => {

    




  return (
    <BaseLayout>
    <>
        <div className='mx-4 md:mx-32 lg:mx-32 my-20 md:my-28 flex-col md:space-y-8'>

            <div className='flex justify-center'><h className='md:text-[4rem] lg:text-[3.5rem] sm:text-4xl text-2xl uppercase font-bold text-white drop-shadow-lg'>Certifications</h></div>
            <div className='flex flex-wrap justify-center align-middle'>

            <CertificateCard img='/google_certificate.jpg' header='Google Certificate' desc='The Fundamentals of Digital Marketing'org='Google' link='https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code' />

            <CertificateCard img='/nielit_internship.jpg' header='Internship Certificate' desc='Training cum Internship on Machine Learning'org='NIELIT, Guwahati' link='https://nielit.gov.in/guwahati/index.php' />
            
        </div>

        <div className="grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 md:grid-flow-col-dense gap-4 pt-16 md:pt-24">
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-1 lg:col-span-1 lg:row-span-1">


          <Cards img1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-32 h-32">
  <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
</svg>
' img2='' desc = 'main section' title='Home' link='/'/>

            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-2 lg:col-span-2 lg:row-span-1">
            

          <ServiceCards img1='<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13.5 3a.5.5 0 01.5.5V11H2V3.5a.5.5 0 01.5-.5h11zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11zM0 12.5h16a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5z" />
    </svg>' img2='<svg
      viewBox="0 0 20 20"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 100-2 1 1 0 000 2z" />
    </svg>' desc = 'specialization' title='Services Offering' link='/contact'/>

            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-1 lg:col-span-1 lg:row-span-1">
            <Credent img1='/sign.png' img2='/sign_light.png' description='More About Me' header='Credentials' link='/credentials' />
            </div>
          </div>

        </div>

        

        
    </>
    </BaseLayout>
  )
}

export default Skill