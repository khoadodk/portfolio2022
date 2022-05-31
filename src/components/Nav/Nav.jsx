import React, {useState} from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  const [isActiveNav, setActiveNav] = useState('#')
 
  return (
    <nav>
      {/* eslint-disable-next-line */} 
      <a href="#"  onClick={ () => setActiveNav('#')} className={isActiveNav === "#" ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={ () => setActiveNav('#about')} className={isActiveNav === '#about' ? 'active' : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={ () => setActiveNav('#experience')} className={isActiveNav === '#experience' ? 'active' : ""}><BiBook /></a>
      <a href="#services" onClick={ () => setActiveNav('#services')} className={isActiveNav === '#services' ? 'active' : ""}><RiServiceLine /></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact')} className={isActiveNav === '#contact' ? 'active' : ""}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav