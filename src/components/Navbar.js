import React from 'react'
import { FaSearch } from "react-icons/fa";
import logo from '../navimages/logo.png'
import logo2 from '../navimages/logo2.png'
import imgone from '../navimages/imgone.png'
import imgtwo from '../navimages/imgtwo.png'
import imgthree from '../navimages/imgthree.png'
import imgfour from '../navimages/imgfour.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div className='logo-one img1'><img src={logo} alt='Logo'  /></div>
        <div className='logo-two img1'><img src={logo2} alt='Logo2'  /></div>
      </div>

      <div className='navbar-middle'>
        <div className="input-one">
          <div className='search-icon'><FaSearch /></div>
          <input type='text' placeholder='Search for the books you want and read it now'></input>
        </div>
        <button className='search-btn'>search</button>
      </div>

      <div className='navbar-right'>
        <img src={imgone} alt='imgone' />
        <img src={imgtwo} alt='imgone' />
        <img src={imgthree} alt='imgone' />
        <img src={imgfour} alt='imgone' />
      </div>
    </div>
  )
}

export default Navbar