import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../variants';

const skillsData = [
  {
    category: 'Technical Skills',
    skills: [
      { name: 'React.js', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
      { name: 'Next.js', icon: '/NextJS-Light.svg' },
      { name: 'FastAPI', icon: 'https://img.icons8.com/color/48/000000/api.png' },
      { name: 'Hardhat', icon: 'https://img.icons8.com/color/48/000000/worker-male.png' },
      { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
      { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
      { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
      { name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png' },
      { name: 'Machine Learning', icon: 'https://img.icons8.com/color/48/000000/robot.png' },
      { name: 'Blockchain', icon: 'https://img.icons8.com/color/48/000000/blockchain-technology.png' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' },
      { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
      { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png' },
      { name: 'C', icon: 'https://img.icons8.com/color/48/000000/c-programming.png' },
      { name: 'Go', icon: '/go-logo-white.svg' },
      { name: 'Solidity', icon: '/Solidity.svg' },
      { name: 'Scala', icon: '/Scala-Light.svg' },
      { name: 'Haskell', icon: '/Haskell-Light.svg' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Problem-solving',
      'Team collaboration',
      'Critical thinking',
      'Communication',
      'Adaptability',
    ],
  },
  {
    category: 'Relevant Coursework',
    skills: [
      'Machine Learning with Python',
      'Blockchain',
      'Advanced React',
      'Data Structures and Algorithms',
      'Full Stack Web Development',
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Sklearn', icon: '/SciKitLearn-Light.svg' },
      { name: 'Pandas', icon: 'https://img.icons8.com/color/48/000000/pandas.png' },
      { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    ],
  },
  {
    category: 'Certificates',
    skills: [
      {
        name: 'Course Certifications',
        link: 'https://www.linkedin.com/in/shripraveen-sm/details/certifications/',
        icon: '/link.png' // Example icon for certifications
      },
    ],
  },
];

// const Skills = () => {
//   const [index, setIndex] = useState(0);

//   const nextCategory = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
//   };

//   const prevCategory = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
//   };

//   return (
//     <div className="h-full bg-primary/30 pt-12 text-center xl:text-left">
//       <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
//         <div className='flex-1 flex flex-col justify-center'>
//           <motion.h2
//             variants={fadeIn("right", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden" className='h2'>
//             My <span className='text-accent'>Skills</span> & Expertise
//           </motion.h2>
//           <motion.p
//             variants={fadeIn("right", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className='max-w-[500px] text-lg mx-auto xl:mx-0 mb-6 xl:mb-18 px-2 xl:px-0'>
//             As a versatile and dedicated learner, I have honed various technical and soft skills. Explore my proficiency across different domains below.
//           </motion.p>
//         </div>

//         <motion.div
//           variants={fadeIn("left", 0.2)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className='flex flex-col w-full xl:max-w-[48%] h-[480px] pt-24'>
//           <div className='flex justify-center text-2xl text-accent'>{skillsData[index].category}</div>
//           <AnimatePresence initial={false} mode='wait'>
//             <motion.div
//               key={index}
//               variants={fadeIn("left", 0.2)}
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               className='py-2 xl:py-6 flex flex-wrap gap-4 justify-center'>
//               {skillsData[index].skills.map((skill, skillIndex) => (
//                 <motion.div
//                   key={skillIndex}
//                   variants={fadeIn("left", 0.2)}
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   className='flex flex-col items-center text-white/60'>
//                   {typeof skill === 'string' ? (
//                     <div className='font-light'>{skill}</div>
//                   ) : (
//                     <>
//                       <a href={skill.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
//                         <motion.img
//                           src={skill.icon}
//                           alt={skill.name}
//                           className='w-12 h-12 mb-1'
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -20 }}
//                         />
//                         <div className='font-light'>{skill.name}</div>
//                       </a>
//                     </>
//                   )}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//           <div className='flex items-center justify-between mt-4 xl:mt-8'>
//             <button onClick={prevCategory} className='bg-accent text-white px-4 py-2 rounded'>
//               Previous
//             </button>

//             <button onClick={nextCategory} className='bg-accent text-white px-4 py-2 rounded'>
//               Next
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

const Skills = () => {
  const [index, setIndex] = useState(0);

  const nextCategory = () => {
    setIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
  };

  const prevCategory = () => {
    setIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
  };

  return (
    <div className="h-full bg-primary/30 pt-28 sm:pt-12 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className='flex-1 flex flex-col justify-center mb-8 xl:mb-0'>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            className='h2 text-2xl sm:text-3xl md:text-4xl'>
            My <span className='text-accent'>Skills</span> & Expertise
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] text-sm sm:text-base md:text-lg mx-auto xl:mx-0 mb-4 xl:mb-12 px-4 xl:px-0'>
            As a versatile and dedicated learner, I have honed various technical and soft skills. Explore my proficiency across different domains below.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[400px] sm:h-[480px] pt-4 sm:pt-8 xl:pt-24'>
          <div className='flex justify-center text-xl sm:text-2xl text-accent mb-4'>{skillsData[index].category}</div>
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={index}
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='py-2 xl:py-6 flex flex-wrap gap-2 sm:gap-4 justify-center'>
              {skillsData[index].skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className='flex flex-col items-center text-white/60'>
                  {typeof skill === 'string' ? (
                    <div className='font-light text-sm sm:text-base'>{skill}</div>
                  ) : (
                    <>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                        <motion.img
                          src={skill.icon}
                          alt={skill.name}
                          className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        />
                        <div className='font-light text-xs sm:text-sm'>{skill.name}</div>
                      </a>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className='flex items-center justify-between mt-4 xl:mt-8'>
            <button onClick={prevCategory} className='bg-accent text-white px-2 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base'>
              Previous
            </button>
            <button onClick={nextCategory} className='bg-accent text-white px-2 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base'>
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
