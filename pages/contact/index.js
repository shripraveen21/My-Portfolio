

// import React, { useState } from 'react';
// import { BsArrowRight } from 'react-icons/bs';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { fadeIn } from '../../variants';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/send-email', formData);
//       console.log(response.data);
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <div className='min-h-screen bg-primary/30 xl:pt-52'>
//       <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
//         <div className='flex flex-col w-full max-w-[700px] '>
//           <motion.h2
//             variants={fadeIn('up', 0.4)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='h2 text-center mb-12'>
//             Let's <span className='text-accent'>connect.</span>
//           </motion.h2>
//           <motion.form
//             variants={fadeIn('right', 0.6)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='flex-1 flex flex-col gap-6 w-full mx-auto'
//             onSubmit={handleSubmit}>
//             <div className='flex gap-x-6'>
//               <input type='text' placeholder='name' name='name' className='input' value={formData.name} onChange={handleChange} />
//               <input type='text' placeholder='email' name='email' className='input' value={formData.email} onChange={handleChange} />
//             </div>
//             <input type='text' placeholder='subject' name='subject' className='input' value={formData.subject} onChange={handleChange} />
//             <textarea placeholder='message' name='message' className='textarea' value={formData.message} onChange={handleChange}></textarea>
//             <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
//               <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
//                 Let's talk
//               </span>
//               <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import axios from 'axios';
import { fadeIn } from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    try {
      const response = await axios.post('https://formspree.io/f/xblrjznd', {
        name,
        email,
        _subject: subject, // Formspree uses _subject for email subjects
        message
      });
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      console.log('Form submitted:', response);
      alert('Email sent successfully!');
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className='min-h-screen bg-primary/30 xl:pt-52'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] '>
        <motion.h2
  variants={fadeIn('up', 0.4)}
  initial='hidden'
  animate='show'
  exit='hidden'
  className='h2 text-center mb-12'>
  Let&apos;s <span className='text-accent'>connect.</span>
</motion.h2>
          <motion.form
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}>
            <div className='flex gap-x-6'>
              <input type='text' placeholder='Name' name='name' className='input' value={formData.name} onChange={handleChange} />
              <input type='email' placeholder='Email' name='email' className='input' value={formData.email} onChange={handleChange} />
            </div>
            <input type='text' placeholder='Subject' name='subject' className='input' value={formData.subject} onChange={handleChange} />
            <textarea placeholder='Message' name='message' className='textarea' value={formData.message} onChange={handleChange}></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
    Let&apos;s talk
  </span>
  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

