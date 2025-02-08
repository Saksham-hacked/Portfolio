import React from 'react'
import { MdEmail } from "react-icons/md"; 
import { useState } from 'react';
import { useNavigate } from 'react-router';


const MailButton = () => {
  const navigate = useNavigate();
 
  return (
    <div 
    onClick={() => navigate('/message')}  // Navigate to contact page when clicked on button.
    className='px-4 md:hidden '>
        
        <h3 className='hover:cursor-pointer'><MdEmail size={25} /></h3>
      
    </div>
    
  )
}

export default MailButton