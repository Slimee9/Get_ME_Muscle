import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-[#f0f8ff] flex items-center justify-center  px-4 h-16 ' >
      <p className=' text-sm text-center'> 
        Get ME Muscle - Join the GetMEMuscles community for personalized coaching, live Q&As and many more, Let’s build strength together! 💪
        <br /> 
        <span className='text-xs hover:underline  hover:text-blue-600 cursor-pointer '>
               Copyright &copy;{currentYear} GetMEMuscles All rights reserverd
               
        </span>
      </p> 
  
    </footer>
  )
}

export default Footer