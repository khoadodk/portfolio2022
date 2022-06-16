import React from 'react';
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.JPG"
import IMG2 from "../../assets/portfolio2.JPG"
import IMG3 from "../../assets/portfolio3.JPG"
import IMG4 from "../../assets/portfolio4.JPG"
import IMG5 from "../../assets/portfolio5.JPG"
import IMG6 from "../../assets/portfolio6.png"
// 4 : 3 image

const data = [
  {
    id:1,
    image: IMG1,
    title:"Newsletter email template",
    github: 'https://newssletter-email.netlify.app',
    demo: 'https://github.com/khoadodk/newsletter-email'
  },
  {
    id:2,
    image: IMG2,
    title:"Shopping Cart email template",
    github: 'https://github.com/khoadodk/cart-email',
    demo: 'https://cart-email.netlify.app'
  },
  {
    id:3,
    image: IMG3,
    title:"HTML CSS JavaScript",
    github: 'https://github.com/khoadodk/cosmetics',
    demo: 'https://cosmeticcs.netlify.app/'
  },
  {
    id:4,
    image: IMG4,
    title:"Wordpress Theme from scratch",
    github: 'https://github.com/khoadodk/kd-learning',
    demo: 'https://doinvestteam.com'
  },
  {
    id:5,
    image: IMG5,
    title:"React Portfolio",
    github: 'https://github.com',
    demo: 'https://google.com'
  }, 
  {
    id:6,
    image: IMG6,
    title:"NextJS Headless Shopify",
    github: 'https://github.com/khoadodk/next-shopify',
    demo: 'https://next-shopify-ruby.vercel.app'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio