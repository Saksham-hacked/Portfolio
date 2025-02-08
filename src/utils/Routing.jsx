import React from 'react';
import { Routes, Route } from 'react-router';
import About from "../Components/About.jsx";
import Home from '../Components/Home.jsx'; // Corrected import
import Stripes from '../Components/Stripes.jsx';
import Message from '../Components/Message.jsx';

import Portfolio from '../Components/Portfolio.jsx';

// import UserDetails from '../components/UserDetails.jsx';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <Home />
        <Stripes />
        </>
    } />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/User/:name" element={<UserDetails />} /> */}
      {/* <Route path="/User" element={<User />}><Route path="/User/:name" element={<UserDetails />} /></Route> */}
      <Route path="/about" element={<About />} />
      <Route path="/message" element={<Message />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default Routing;
