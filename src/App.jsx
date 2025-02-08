import React from 'react';
import Navbar from './Components/Navbar';
import Routing from './utils/Routing.jsx'; 
import Button from './Components/Button';

const App = () => {
  return (
    <div className='w-full p-4 h-auto min-h-screen bg-black text-white'>
      <Navbar />
      <Routing />
      <div className=' flex md:hidden'>
      <Button />
      </div>
      {/* <Stripes /> */}
    </div>
  );
}

export default App;
