import React from 'react';
import "./Header.css";
import CTA from './CTA';
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Khoa "Kay" Do</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        
        <div class="scrollDown">
          <a href="#about">
            <div class="scrollDown__wheel">
              <div class="scrollDown__wheel--inner"></div>
            </div>
          </a>
          <div class="scrollDown__arrows">
              <span class="scrollDown__arrow"></span>
              <span class="scrollDown__arrow"></span>
              <span class="scrollDown__arrow"></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header