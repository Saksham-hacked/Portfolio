import React from "react";
import {FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {myphoto} from "../../src/assets/Public"
import { Tooltip } from "react-tooltip";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className=""
    
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{  duration: 1 }}>

    <section className="bg-black p-10 rounded-2xl shadow-lg shadow-green-300 max-w-4xl mx-auto flex flex-col md:flex-row items-center mt-10">
      <div className="md:w-1/3 flex justify-center">
        <img
          src= {myphoto}
          alt="Profile"
          className="w-48 h-auto rounded-full mb-4 shadow-slate-100"
        />
      </div>
      <div className="md:w-2/3 text-left p-6 font-[satoshi]">
        <h2 className="text-3xl font-bold text-white">Saksham Kaushish</h2>
        <p className="text-gray-400 text-lg mt-2">
          I am a passionate "problem solver".An electrical engineer that
          love creating impactful projects and solving real-world problems
          through code.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-200">Skills</h3>
          <p className="text-gray-400">JavaScript, React, Node.js, CSS,C++ etc.</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-200">Experience</h3>
          <p className="text-gray-400">Worked closely with Reactjs</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-200">Education</h3>
          <p className="text-gray-400 hidden md:block" data-tooltip-id="education">hover to know</p>
          <p className="text-gray-400 md:hidden">
            Electrical Engineering - NIT Jalandhar,
            <br />
            Delhi Public School, Roorkee - 10+2 (2021)
          </p>
          <Tooltip id="education" place="top" content="I have done my schooling from DPS roorkee and and now I am at NIT jalandhar pursuing electrical engineering" />
        </div>
        <div className="flex mt-6 space-x-4">
          <a href="https://www.instagram.com/saksham_kaushish" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-700 text-2xl hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/reach-saksham-kaushish/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
          </a>
          <a href="https://x.com/DunkinDomino" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-blue-500 text-2xl hover:text-blue-700" />
          </a>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
