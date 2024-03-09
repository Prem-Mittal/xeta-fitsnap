import React from 'react'
import { FaUser } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className='flex bg-blue-900 justify-between px-10 py-3'>
        <img src="download.png" />
        <ul className='flex space-x-8 pt-1'>
            <li className='text-white'>HOME</li>
            <li className='text-white'>WORKOUT PLAN</li>
            <li className='text-white'>AI TRACKER</li>
            <li className='text-white'>EXERCISE</li>
            <li className='text-white'>ABOUT</li>
            <button className='text-white bg-gray-600 flex border px-2 py-1 -mt-1 '><FaUser className='mx-1 mt-1' />LOGIN</button>
        </ul>
    </nav>
  )
}
