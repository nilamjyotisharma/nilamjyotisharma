import BaseLayout from '@/layouts/BaseLayout';
import Image from 'next/image';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import Abtexp from '../../components/abtexp';
import Credent from '../../components/credent';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import WorkTogether from '../../components/workTogether';
import ServiceCards from '../../components/serviceCard';
import AboutHeroSection from '@/components/aboutHeroSection';


export const metadata = {
    title : 'About'
  }
  

const page = () => {
  return (
    <BaseLayout>
      <AboutHeroSection />
    </BaseLayout>
  )
}

export default page