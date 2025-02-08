// import React from 'react'
// import Button from './Button'
// import { NavLink } from 'react-router'
// import MailButton from './MailButton'

// const Navbar = () => {
//   return (
//     <div className='max-w-screen-xl w-full h-auto p-4 flex items-center  '>
//        <div className='nleft flex items-center w-full  gap-[3px]'>
       
//        <h1 className='font-[satoshi] text-xs md:text-xl text-nowrap text-center justify-between font-semibold'>Saksham Kaushish</h1>
//         <div className=' links ml-10 flex gap-1.5 sm:gap-3 text-xs md:text-base'>

//         <NavLink style={(e)=>{
        
//         if (e.isActive)
//         {
//           return {
//             color:"rgb(14, 247, 14)",
//             fontWeight: 'bold'
//           }
//         }
      
//         }} to="/">Home</NavLink>
//         <NavLink style={(e)=>{
        
//         if (e.isActive)
//         {
//           return {
//             color:' rgb(14, 247, 14)',
//             fontWeight: 'bold'
//           }
//         }
      
//         }} to="/about">About</NavLink>
//         <NavLink style={(e)=>{
        
//         if (e.isActive)
//         {
//           return {
//             color:' rgb(14, 247, 14)',
//             fontWeight: 'bold'
//           }
//         }
      
//         }} to="/portfolio">Portfolio</NavLink>

//         </div>
//        </div>
       
//        <Button  />
//        <MailButton />
      
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { NavLink } from "react-router"; // Fixed import
import Button from "./Button";
import MailButton from "./MailButton";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-l  h-auto px-6 flex items-center justify-between border-b-[1px] border-zinc-700 py-6 md:mx-10">
      {/* Left Section */}
      <div className="flex items-center w-full md:gap-16">
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Title */}
        <h1 className="font-[satoshi] text-xs md:text-xl text-nowrap text-center font-semibold">
          Saksham Kaushish
        </h1>

        {/* Links - Hidden on small screens */}
        <div className="hidden md:flex ml-10 gap-1.5 sm:gap-3 text-xs md:text-base md:gap-10">
          <NavLink
            style={(e) => (e.isActive ? { color: "rgb(14, 247, 14)", fontWeight: "bold" } : {})}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={(e) => (e.isActive ? { color: "rgb(14, 247, 14)", fontWeight: "bold" } : {})}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={(e) => (e.isActive ? { color: "rgb(14, 247, 14)", fontWeight: "bold" } : {})}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </div>
      </div>

      {/* Buttons (Always Visible) */}
      <Button />
      <MailButton />

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-4  flex flex-col gap-2 bg-black text-white p-4 rounded-lg shadow-md shadow-green-300 md:hidden z-10">
          <span onClick={() => setIsOpen(false)}>

          <NavLink
            className=" py-2"
            style={(e) => (e.isActive ? { color: "rgb(14, 247, 14)", fontWeight: "bold" } : {})}
            to="/"
            onClick={() => setIsOpen(false)}
            >
            Home
          </NavLink>
            </span >


          <span onClick={() => setIsOpen(false)}>

            
          <NavLink
            className=" py-2"
            style={(e) => (e.isActive ? { color: "rgb(14, 247, 14)", fontWeight: "bold" } : {})}
            to="/about"
            
          >
            About
          </NavLink>

            </span>
             
          <span className="hover:cursor-pointer" onClick={() => setIsOpen(false)}>

           <NavLink
            className="  my-1 py-2 "
            style={(e) => (e.isActive ? { color: "rgb(14, 247, 14)", fontWeight: "bold" } : {})}
            to="/portfolio"
            
          >
            Portfolio
          </NavLink>
            </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;



//max-w-screen-xl py-6 bg  flex items-center mx-auto justify-between border-b-[1px] border-zinc-700