import React from 'react'

export default function Button1({button1}) {
  return (
    <div>
          <button className="group relative rounded-full px-8 sm:px-10 py-4 sm:py-5 
            bg-white text-black font-bold uppercase text-xs sm:text-sm tracking-widest
            transition-all duration-300 hover:bg-black hover:border-b  hover:text-white hover:-translate-y-1">
            {button1}
          </button>
        </div>
  )
}
