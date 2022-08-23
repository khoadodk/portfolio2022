import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Khoa Do</h1>
        <h4 className="text-light">Front End Web Developer</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div className="scrollDown">
          <a href="#about">
            <div className="scrollDown__wheel">
              <div className="scrollDown__wheel--inner"></div>
            </div>
          </a>
          <div className="scrollDown__arrows">
            <span className="scrollDown__arrow"></span>
            <span className="scrollDown__arrow"></span>
            <span className="scrollDown__arrow"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
