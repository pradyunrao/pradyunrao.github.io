import React, { FC } from 'react'
import navbarStyles from "./navbar.module.css"


export const Navbar:FC = function() {
    return(
      <nav className= {navbarStyles.navbar}>
        <div className={navbarStyles.inner_div}>
          <span className={navbarStyles.title}>Pradyun Rao</span>
          <ul className='flex flex-row gap-x-10 p-3.5 pr-12 text-white text-xl'>
            <li className='hover:text-teal-800'>About Me</li>
            <li className='hover:text-teal-800'>Projects</li>
            <li className='hover:text-teal-800'>Skills</li>
            <li className='hover:text-teal-800'>Contact Me</li>
          </ul>
        </div>  
      </nav>
    )
}