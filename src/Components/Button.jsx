import React from 'react'
import {motion} from "framer-motion"
import { BsArrowReturnRight } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Button = () => {
  const navigate = useNavigate();
 
  return (
    <motion.div 
     initial={{rotate:"0deg"}}
     animate={{rotate:["0deg","4deg","-4deg",'-4deg',"0deg"]}}
     transition={{duration: 0.5, time:[0,0.25,0.5,0.75,1],repeat:Infinity ,repeatDelay:3}}
    onClick={() => navigate('/message')}  // Navigate to contact page when clicked on button.
    className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full hover: cursor-pointer md:flex items-center justify-between hidden'>
        <span className='text-sm font-medium'>Message me</span>
        <h3><BsArrowReturnRight /></h3>
      
    </motion.div>
    
  )
}

export default Button
