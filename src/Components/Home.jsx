import React from 'react'
import { motion } from "motion/react"

// const Work = () => {

//    const work=["w","o","r","k",".",'.','.'];
//    const textwith =["w","i","t","h","<","s","a","k","s","h","a","m","/",">"];

//   return (
//     <div className='w-full mt-10'>
//         <div className=' relative max-w-screen-lg mx-auto text-center flex items-center '>
//           {
//             work.map((letter, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: index * 0.15, duration: 1 }}
//                 className='text-[27vw] leading-none font-medium tracking-tight text-center select-none'
//               >
//                 <div className='text-[10vw] leading-none font-medium tracking-tight text-center select-none flex items-center justify-center'>{letter}</div>
//               </motion.div>
//             ))
//           }
          
//             {/* <h1 className='text-[27vw] leading-none font-medium tracking-tight text-center select-none'>Work</h1> */}
        
//         </div>
        
//         <div className='ml-80'><div className='relative max-w-screen-lg mx-auto text-center flex items-center  '>
//         {
//             textwith.map((letter, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: index * 0.15 + 1, duration: 1 }}
//                 className='text-[10vw] leading-none font-medium tracking-tight text-center select-none '
//               >
//                 <div className='text-[7vw] leading-none font-medium tracking-tight text-center select-none flex items-center justify-center'>{letter}</div>
//               </motion.div>
//             ))
//           }
//         </div></div>
      
//     </div>
//   )
// }
// import { motion } from 'framer-motion';

const Work = () => {
  const work = ["w", "o", "r", "k", ".", ".", "."];
  const textwith = ["w", "i", "t", "h", "<", "s", "a", "k", "s", "h", "a", "m", "/",">"];

  return (
    <div className='w-full mt-[10vh] overflow-hidden'> {/* Added overflow-hidden */}
      <div className='relative max-w-screen-lg mx-auto flex flex-wrap justify-center items-center'> {/* Added flex-wrap and justify-center */}
        {work.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 1 }}
            className='text-[10vw] leading-none font-medium tracking-tight text-center select-none' // Responsive text sizing
          >
            {letter} {/* Removed unnecessary nested div */}
          </motion.div>
        ))}
      </div>

      <div className='mt-4 relative max-w-screen-lg mx-auto flex flex-wrap justify-center items-center'> {/* Added mt-4, flex-wrap and justify-center */}
        {textwith.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + work.length * 0.15, duration: 1 }} // Delay after "work" animation
            className='text-[7vw] leading-none font-medium tracking-tight text-center select-none' // Responsive text sizing
          >
            {letter} {/* Removed unnecessary nested div */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work
