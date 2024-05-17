import React from 'react'

function Navbar() {
  return (
    <nav className='bg-purple-600 text-white flex justify-around
    text-xl p-2  align-middle items-center 
    '>
        <h1 className='text-2xl font-bold font-sans cursor-pointer'>Todo-App</h1>
      <ul className='flex space-x-10 cursor-pointer font-bold'>
        <li>Home</li>
        <li>Check-Todo</li>
      </ul>
    </nav>
  )
}

export default Navbar