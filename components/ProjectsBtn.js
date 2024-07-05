import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-50'>
      <Link 
        href='/work' 
        className='relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] xl:w-[185px] xl:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group' 
        aria-label='View Projects'
      >
        <div className='flex items-center justify-center w-full h-full'>
          <Image
            src='/rounded-text.png'
            width={141}
            height={148}
            alt='Projects'
            className='animate-spin-slow w-[80%] h-[80%] sm:w-[90%] sm:h-[90%] xl:w-full xl:h-full max-w-[141px] max-h-[148px]'
          />
        </div>
        <HiArrowRight className='absolute text-2xl sm:text-3xl xl:text-4xl group-hover:translate-x-2 transition-all duration-300' />
        {/* Add an invisible overlay to increase clickable area */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='sr-only'>View Projects</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;