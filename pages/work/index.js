import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '../../variants';
const Work = () => {
  const projects = [
    {
      title: 'Dementia-Guardian',
      link: 'https://github.com/shripraveen21/Dementia-Guardian',
      description: 'An IoT and React.js based project for assisting dementia patients.',
      image: '/dementia-guardian.png',
    },
    {
      title: 'Intelligent Inventory Management System',
      link: 'https://github.com/shripraveen21/Intelligent-inventory-and-investment-Management-system',
      description: 'A system built with React.js to manage inventory and investments intelligently.',
      image: '/inventory-management.png',
    },
    {
      title: 'Chat DAPP',
      link: 'https://github.com/shripraveen21/Chat-DAPP',
      description: 'A blockchain-based chat application.',
      image: '/chat-dapp.png',
    },
    {
      title: 'Road Accidents Registration',
      link: 'https://github.com/shripraveen21/ROAD-ACCIDENTS',
      description: 'A project for recording road accidents using HTML, CSS, JS, and MySQL.',
      image: '/road-accidents.jpeg',
    },
    {
      title: 'Stroke Prediction',
      link: 'https://github.com/shripraveen21/Stroke-prediction-comparisionbtwmodels',
      description: 'A machine learning comparison project for stroke prediction.',
      image: '/stroke-prediction.jpg',
    },
    {
      title: 'Language Translation',
      link: 'https://github.com/shripraveen21/Language_Translation',
      description: 'An embedded system for language translation.',
      image: '/language-translation.jpg',
    },
    {
      title: 'Ride Matching Service - DSA',
      link: 'https://github.com/shripraveen21/dsa',
      description: 'A data structures and algorithms project for ride matching.',
      image: '/ride-matching.jpeg',
    },
    {
      title: 'Movie Land',
      link: 'https://github.com/shripraveen21/Movie_Land',
      description: 'A React.js project for browsing movies.',
      image: '/movie-land.jpeg',
    },
    {
      title: 'Tin Dog',
      link: 'https://github.com/shripraveen21/Tin-Dog',
      description: 'A website development project.',
      image: '/tin-dog.jpeg',
    },
    {
      title: 'E-Commerce Store',
      link: 'https://github.com/shripraveen21/E-COMMERCE-STORE',
      description: 'An e-commerce store built using Java and OOP principles.',
      image: '/ecommerce-store.png',
    },
  ];

  return (
    <section id="projects" className="flex items-center justify-center py-20">
      <div className="container mx-auto max-w-7xl px-6 xl:mt-28">
        {/* ... (header remains the same) */}
        <motion.h2
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center uppercase font-sora text-4xl md:text-8xl  md:mb-20 xl:mb-10 relative mb-10 mt-32">
          <span className='text-accent'>My</span> Pr<span className='text-accent'>oje</span>cts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-72 md:hidden ">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden shadow-lg ">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm md:text-base text-white mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.link} className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base px-4 py-2 rounded inline-block">Know More</a>
                  <a href={project.link} className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base px-4 py-2 rounded inline-block">Preview</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block space-y-80">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.5 });

            return (
              <div key={index} ref={ref} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center justify-center mx-auto xl:mt-32 xl:mb-96 h-[400px] w-[1100px]`}>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className={`flex-1 ${index % 2 === 0 ? 'ml-[-10px]' : 'mr-[-10px]'} relative z-10`}
                >
                  {/* ... (image content remains the same) */}
                <div className="overflow-hidden rounded-xl shadow-lg relative h-[500px] w-[700px]">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                  <div className="absolute inset-0 bg-[rgba(90,36,237,0.22)]"></div>
                </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className="flex-1  h-[400px] w-[500px] p-12 rounded-xl shadow-md z-0 bg-opacity-40 backdrop-blur-lg bg-white border border-opacity-20 border-white"
                >
                  <motion.h2
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="text-3xl font-montserrat mb-4 text-white underline"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.h3
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="text-xl mb-20 text-black"
                  >
                    {project.description}
                  </motion.h3>
                  {/* ... (rest of the content remains the same) */}
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="flex flex-row gap-8 ">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-primary text-white text-xl px-6 py-2.5 rounded-full inline-block">Know More</a>

                </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Work;

