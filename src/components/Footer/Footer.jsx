import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Khoa Do</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Khoa do. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer