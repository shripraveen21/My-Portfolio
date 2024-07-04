// // links
// import Link from 'next/link';
// import { useState } from 'react';

// // icons
// import { RiInstagramLine } from "react-icons/ri";
// import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const Socials = () => {
//   const [tooltip, setTooltip] = useState('Click to copy mail address');

//   const handleMailClick = () => {
//     navigator.clipboard.writeText('smshripraveen@gmail.com').then(() => {
//       setTooltip('Copied!');
//       setTimeout(() => setTooltip('Click to copy mail address'), 2000);
//     });
//   };

//   return (
//     <div className="social-icons flex flex-row items-center gap-x-5 text-sm">
//       <Link href="https://github.com/shripraveen21" legacyBehavior>
//         <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="GitHub">
//           <FaGithub size={30} />
//         </a>
//       </Link>
//       <Link href="https://www.linkedin.com/in/shripraveen-sm/" legacyBehavior>
//         <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="LinkedIn">
//           <FaLinkedin size={30} />
//         </a>
//       </Link>
//       <Link href="https://www.hackerrank.com/profile/shripraveen47" legacyBehavior>
//         <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="HackerRank">
//           <FaHackerrank size={30} />
//         </a>
//       </Link>
//       <Link href="https://leetcode.com/u/Shripraveen21/" legacyBehavior>
//         <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="LeetCode">
//           <SiLeetcode size={30} />
//         </a>
//       </Link>
//       <div className="relative mt-2 group" >
//         <button onClick={handleMailClick} className="hover:text-accent transition-all duration-300 justify-center items-center" title="Email">
//           <FaEnvelope size={34} />
//         </button>
//         <div className="absolute bottom-full mb-2 hidden w-max px-2 py-1 text-sm text-white bg-gray-700 rounded group-hover:block">
//           {tooltip}
//         </div>
//       </div>
//       <Link href="https://instagram.com/shri._.praveen" legacyBehavior>
//         <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="Instagram">
//           <RiInstagramLine size={30} />
//         </a>
//       </Link>
//     </div>
//   );
// };

// export default Socials;

import Link from 'next/link';
import { useState } from 'react';
import { RiInstagramLine } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = () => {
  const [tooltip, setTooltip] = useState('Click to copy mail address');

  const handleMailClick = () => {
    navigator.clipboard.writeText('smshripraveen@gmail.com').then(() => {
      setTooltip('Copied!');
      setTimeout(() => setTooltip('Click to copy mail address'), 2000);
    });
  };

  const iconSize = 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8';

  return (
    <div className="social-icons flex flex-row items-center gap-x-3 sm:gap-x-4 md:gap-x-5 text-sm">
      <Link href="https://github.com/shripraveen21" legacyBehavior>
        <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="GitHub">
          <FaGithub className={iconSize} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/shripraveen-sm/" legacyBehavior>
        <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className={iconSize} />
        </a>
      </Link>
      <Link href="https://www.hackerrank.com/profile/shripraveen47" legacyBehavior>
        <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="HackerRank">
          <FaHackerrank className={iconSize} />
        </a>
      </Link>
      <Link href="https://leetcode.com/u/Shripraveen21/" legacyBehavior>
        <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="LeetCode">
          <SiLeetcode className={iconSize} />
        </a>
      </Link>
      <div className="relative group" >
        <button onClick={handleMailClick} className="hover:text-accent transition-all duration-300 flex justify-center items-center" title="Email">
          <FaEnvelope className={iconSize} />
        </button>
        <div className="absolute bottom-full mb-2 hidden w-max px-2 py-1 text-xs sm:text-sm text-white bg-gray-700 rounded group-hover:block">
          {tooltip}
        </div>
      </div>
      <Link href="https://instagram.com/shri._.praveen" legacyBehavior>
        <a target="_blank" className="hover:text-accent transition-all duration-300" rel="noopener noreferrer" title="Instagram">
          <RiInstagramLine className={iconSize} />
        </a>
      </Link>
    </div>
  );
};

export default Socials;