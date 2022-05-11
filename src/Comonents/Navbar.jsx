import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='logo'>
          <h2>School<span>Of</span>Tomorrow</h2>
       </div>
       <div className='nav-links'>
           <a href='!#' className='active'>Home</a>
           <a href='!#'>Contact</a>
           <a href='!#'>Calender</a>
           <a href='!#'>News announcement</a>
           <a href='!#'>Schedule</a>
           <a href='!#'>About us</a>
           <a href='!#'>Sign in</a>
           <a href='!#'>Register</a>
       </div>
    </div>
  )
}
