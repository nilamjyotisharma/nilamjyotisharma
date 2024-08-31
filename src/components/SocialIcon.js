import Link from 'next/link';

const SocialIcon = ({ href, icon: Icon }) => {
  return (
    <Link href={href} target="_blank">
      <div className='duration-200 hover:scale-110 cursor-pointer text-white p-3 rounded-full bg-gradient-to-r from-[#6B32EE] to-[#E50879] shadow-lg'>
        <Icon />
      </div>
    </Link>
  );
};

export default SocialIcon;
