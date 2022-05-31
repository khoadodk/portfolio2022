import React,{ useRef } from 'react';
import "./Contact.css"
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fipsr7q', 'template_ise53ph', form.current, 'OwFOq1Jcg-WQzrD4Z')
    e.target.reset()

  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>khoado.dk@gmail.com</h5>
            <a href="mailto:khoado.dk@gmail.com">Send Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Khoa Do</h5>
            <a href="https://m.me/khoa_do">Text me</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone />
            <h4>Phone</h4>
            <h5>704-777-5415</h5>
            <a href="tel:+17047775415">Call Now</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="emai" name="email" placeholder='Email' required />
          <textarea name="message" rows={10} placeholder='Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact