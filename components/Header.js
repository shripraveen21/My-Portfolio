

// // next image
// import Image from 'next/image';

// //next link
// import Link from 'next/link';

// //components

// import Socials from '../components/Socials';



// const Header = () => {
//   return (
//     <header className='fixed z-50 w-full flex items-center px-20 sm:p-0 xl:px-0 xl:h-[90px] xl:mt-8'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
//           {/* logo */}
//           <Link href={'/'}>
//             <Image
//               src={'/./new_white.png'}
//               width={300} 
//               height={66}
//               alt=''
//               priority={true}
//             />
//           </Link>
//           <Socials/>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='fixed z-50 w-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-0 xl:h-[90px] xl:mt-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 lg:py-8'>
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/./new_white.png'}
              width={200} 
              height={44}
              alt='Logo'
              priority={true}
              className='w-[200px] h-auto sm:w-[250px] md:w-[300px]'
            />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;