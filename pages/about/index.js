
// icons
import React, { useState } from 'react';
// import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
// import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

//compoenents
import Avatar from '../../components/Avatar';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from 'react-countup';
// Data moved outside of the component for better readabilityimport { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiTensorflow, SiBlockchaindotcom } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Data Structures and Algorithms',
        icons: [
          <DiDatabase />, // Database icon representing structured data
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'Machine Learning',
        icons: [
          <SiTensorflow />, // TensorFlow icon representing machine learning
        ],
      },
      {
        title: 'Blockchain',
        icons: [
          <SiBlockchaindotcom />, // Blockchain icon
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobephotoshop />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Code-father Contest Winner',
        stage: '2023 - Anokha, Amrita Vishwa Vidyapeetham',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'B.Tech in Computer Science and Engineering',
        stage: 'Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu, India (Sep 2021 - Present) - CGPA: 7.29 (as of 6th semester)',
      },
      {
        title: 'High School',
        stage: 'Maharishi Vidya Mandir Senior Secondary School, Hosur, Tamil Nadu, India (2019 - 2021) - Percentage: 84',
      },
      {
        title: 'School',
        stage: 'Sri Gurukulam Higher Secondary School, Hosur (4th Std - 10th Std) - Percentage: 71',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Current Career Path',
        stage: 'Final Year B.Tech Student specializing in Computer Science and Engineering',
        description: 'Passionate about machine learning, web development, and blockchain. Actively working on projects and expanding my knowledge in these areas to build a successful career in technology.'
      },
    ],
  },
];



const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 pt-48 text-center xl:text-left">
      {/* Avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text  */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden" className='h2'>
            Passionate <span className='text-accent'>learner</span> shaping innovative solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-18 px-2 xl:px-0'>
            As a final-year B.Tech student specializing in Computer Science and Engineering, I am committed to advancing my knowledge and skills in machine learning, web development, and blockchain. Through various projects and continuous learning, I strive to develop scalable and impactful technological solutions.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=' mb-4 text-xs xl:text-0.8xl'>
              {/* mb-4 text-xs xl:text-0.8xl */}
              {/* hidden md:flex md:max-w-xl xl:max-w-none mx-auto */}
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Projects  */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={100} end={10} duration={5} /> *
                </div>
                <div className='text-us uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                  Projects Completed
                </div>
              </div>
              {/* Certificates */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={100} end={7} duration={5} /> *
                </div>
                <div className='text-us uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                  Courses & Certificates
                </div>
              </div>
              {/* Techonologies/Frameworks Known */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={100} end={10} duration={5} /> *
                </div>
                <div className='text-us uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                  Languages Known
                </div>
              </div>
              {/* Languages Known */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={100} end={8} duration={5} /> *
                </div>
                <div className='text-us uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                  Tech & Frameworks Known
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : ''} after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center 
          xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (<div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/* title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className='text-2xl text-white' >{icon}</div>
                  })}
                </div>
              </div>
              );
            })}
          </div>
      </motion.div>
    </div>
    </div >
  );
};

export default About;
// 1:42:24