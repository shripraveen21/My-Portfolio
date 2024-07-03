
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './work.module.css'; // Importing scoped styles from work.module.css
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dementia-Guardian',
    link: 'https://github.com/shripraveen21/Dementia-Guardian',
    description: 'An IoT and React.js based project for assisting dementia patients.',
    image: '/dementia-guardian.png',
  },
  {
    title: 'Intelligent Inventory and Investment Management System',
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

const work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="overflow-hidden relative">
      <div className={`${styles.page} flex flex-col h-screen`}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Work</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
            integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <section className={`${styles.section} flex flex-col justify-center items-center px-4 py-8`}>
          <h1 className={styles['main-title']}>My projects</h1>
          <div className={`${styles.content} flex flex-col md:flex-row md:gap-10`}>
            <div className={`${styles.image} w-full md:w-1/2 mb-4 md:mb-0`}>
              <img src={projects[currentIndex].image} alt="Project Image" />
            </div>
            <div className={`${styles['text-box']} flex flex-col justify-center md:w-1/2`}>
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              <a
                href={projects[currentIndex].link}
                className="icon mt-4 md:mt-0 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Visit GitHub
              </a>
            </div>
          </div>
        </section>
        <div className="absolute inset-y-1/2 w-full flex justify-between items-center px-4">
          <button
            className="bg-white rounded-full shadow-md h-12 w-12 text-2xl xl:ml-60 text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline"
            onClick={prevProject}
          >
            <span className="block" style={{ transform: 'scale(-1)' }}>
              &#x279c;
            </span>
          </button>
          <button
            className="bg-white rounded-full shadow-md h-12 w-12 xl:mr-60 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline"
            onClick={nextProject}
          >
            <span className="block">&#x279c;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default work;
