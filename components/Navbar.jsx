import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-center items-center  z-10'>
      <div className="py-2 px-4 rounded-xl flex border-b  justify-center">
       
        <div className="flex gap-10">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Blog</p>
            
        </div>
       
      </div>
    </nav>
  )
}
