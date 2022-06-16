import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */} 
      <a href="#" className="footer__logo">Khoa Do</a>

      <ul className="permalinks">
        {/* eslint-disable-next-line */} 
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/khoa-do-dk" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/khoadodk" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022 Khoa do. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer