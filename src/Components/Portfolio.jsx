// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios"
// import {motion} from "framer-motion"

// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { FaLaptopCode, FaGraduationCap, FaBook, FaRunning, FaDownload } from "react-icons/fa";

// const Portfolio = () => {

   
//   const leetcodeData = [
//     { category: "Easy", count: 25 },
//     { category: "Medium", count: 61 },
//     { category: "Hard", count: 7 },
//   ];

//   const COLORS = ["#00ff00", "#008000", "#004d00"];

//   return (
   
//     <motion.div 
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.5 }}
//     className="h-[70vh] p-6 grid grid-cols-2 md:grid-cols-3 gap-6 bg-black text-white">
//       {/* Project Showcase */}
//       <div className="col-span-2 p-4   border border-green-300 rounded-lg">
//         <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//           <FaLaptopCode /> Projects
//         </h2>
//         <ul className="list-disc ml-4">
//           <li>currently working on a fullStack project - web video player</li>
//         </ul>
//       </div>

//       {/* Leetcode Questions Chart */}
//       <div className="row-span-2 p-4 border border-green-300 rounded-lg flex justify-center items-center flex-col">
//         <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-center">
//           <FaBook /> Leetcode Progress
//         </h2>
//         <ResponsiveContainer width="100%" height={200}>
//           <PieChart>
//             <Pie data={leetcodeData} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={80}>
//               {leetcodeData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
       
//       </div>

//       {/* Tech Stack */}
//       <div className="p-4 border border-green-500 rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
//         <p>Reactjs, Python, C++, Figma, Nodejs, Express.js</p>
//       </div>

//       {/* Educational Qualifications */}
//       <div className="p-4 border border-green-500 rounded-lg">
//         <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//           <FaGraduationCap /> Education
//         </h2>
//         <p>BTech in Electrical Engineering, NIT Jalandhar(2nd year)</p>
//         <p>10+2 from Delhi Public School Roorkee</p>
//       </div>

//       {/* Hobbies */}
//       <div className="col-span-2 p-4 border border-green-500 rounded-lg">
//         <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//           <FaRunning /> Hobbies
//         </h2>
//         <p>Gym, Coding Challenges, Travelling</p>
//       </div >
//       <div className="flex justify-center mt-4 py-5">
//           <a
//             href="/resume.pdf"
//             download
//             className="px-10 py-1 bg-green-500 text-black font-bold rounded flex items-center gap-2 hover:bg-green-700"
//           >
//             <FaDownload /> Download Resume
//           </a>
//         </div>
//     </motion.div>
//   );
// };

// export default Portfolio;

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { FaLaptopCode, FaGraduationCap, FaBook, FaRunning, FaDownload } from "react-icons/fa";

const Portfolio = () => {
  const leetcodeData = [
    { category: "Easy", count: 25 },
    { category: "Medium", count: 61 },
    { category: "Hard", count: 7 },
  ];

  const COLORS = ["#00ff00", "#008000", "#004d00"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-black text-white"
    >
      {/* Project Showcase */}
      <div className="sm:col-span-2 p-4 border border-green-300 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaLaptopCode /> Projects
        </h2>
        <ul className="list-disc ml-4">
          <li>Currently working on a fullStack project - Web Video Player</li>
        </ul>
      </div>

      {/* Leetcode Questions Chart */}
      <div className="p-4 border border-green-300 rounded-lg flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-center">
          <FaBook /> Leetcode Progress
        </h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={leetcodeData} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={80}>
              {leetcodeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tech Stack */}
      <div className="p-4 border border-green-500 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
        <p>React.js, Python, C++, Figma, Node.js, Express.js</p>
      </div>

      {/* Educational Qualifications */}
      <div className="p-4 border border-green-500 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaGraduationCap /> Education
        </h2>
        <p>BTech in Electrical Engineering, NIT Jalandhar (2nd year)</p>
        <p>10+2 from Delhi Public School Roorkee</p>
      </div>

      {/* Hobbies */}
      <div className="sm:col-span-2 p-4 border border-green-500 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaRunning /> Hobbies
        </h2>
        <p>Gym, Coding Challenges, Travelling</p>
      </div>

      {/* Resume Download Button */}
      <div className="flex justify-center sm:col-span-2 md:col-span-3 mt-4">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-green-500 text-black font-bold rounded flex items-center gap-2 hover:bg-green-700"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </motion.div>
  );
};

export default Portfolio;
