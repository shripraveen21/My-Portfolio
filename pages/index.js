// next image
import Image from 'next/image';
import Typed from 'react-typed';
// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import React, { useState, useEffect } from 'react';


const skills = ['Web Developer', 'Blockchain', 'Machine Learning'];

const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkill, setDisplayedSkill] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedSkill((prev) => {
        const skill = skills[currentSkillIndex];
        
        if (!isDeleting && prev === skill) {
          setIsDeleting(true);
          return prev;
        }

        if (isDeleting && prev === '') {
          setIsDeleting(false);
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
          return '';
        }

        if (isDeleting) {
          return prev.slice(0, -1);
        }

        return skill.slice(0, prev.length + 1);
      });
    }, 150);

    return () => clearInterval(intervalId);
  }, [currentSkillIndex, isDeleting]);

  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 sm:h4'
          >
            <span className='text-accent'>Hello,</span> I'm Shri Praveen S M<br />
            Specializing in <span className='text-accent'>{displayedSkill}</span> 
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-14 xl:text-lg'>
            Passionate CSE student with expertise in  web development, machine learning and blockchain. Experienced in building scalable applications and committed to continuous learning and improvement.
          </motion.p>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex justify-center xl:justify-start xl:mb-10 mb-3 ml-3 z-50'
          >
            <a
              href='/Resume.pdf'
              target="_blank"
              rel="noopener noreferrer"
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:text-accent transition-all duration-300'>
                View Resume
              </span>
            </a>
          </motion.div>
          {/* button */}
          <div className='flex justify-center xl:hidden relative '>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none mt-1 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
        lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>

  );
};

export default Home;
