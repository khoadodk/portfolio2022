import React from 'react';
import './About.css';
import ME from '../../assets/me2.jpg';
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Working Years</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Industries</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div> */}
          <p className="about__content">
            I've been coding since 2018 just by accident while solving
            an issue for the company I working for. I am hooked to it
            ever since.
            <br />
            I love to design and build beautiful websites.
            <br />
            If you have an idea for your website and you want to bring
            it to live. Hire me!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
