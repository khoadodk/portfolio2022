import { useState } from 'react';
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"
import IMG7 from "../../assets/portfolio7.png"
import IMG8 from "../../assets/portfolio8.png"
import IMG9 from "../../assets/portfolio9.png"
// 4 : 3 image

const data = [
  {
    id:3,
    image: IMG3,
    title:"HTML CSS JavaScript",
    github: 'https://github.com/khoadodk/cosmetics',
    demo: 'https://cosmeticcs.netlify.app',
    category: "javascript"
  },
  {
    id:9,
    image: IMG9,
    title:"Wordpress Theme",
    github: 'https://github.com/khoadodk/marshmallow',
    demo: 'http://khoado.shop',
    category: "wordpress"
  },
  {
    id:8,
    image: IMG8,
    title:"Wordpress Plugin",
    github: 'https://github.com/khoadodk/kd-slider',
    demo: 'https://doinvestteam.com',
    category: "wordpress"
  },
  {
    id:4,
    image: IMG4,
    title:"Wordpress Theme",
    github: 'https://github.com/khoadodk/kd-learning',
    demo: 'https://doinvestteam.com',
    category: "wordpress"
  },
  {
    id:5,
    image: IMG5,
    title:"React Portfolio",
    github: 'https://github.com',
    demo: 'https://khoado.dev',
    category: "react"
  },
  {
    id:7,
    image: IMG7,
    title:"Shopify Theme",
    github: 'https://github.com/khoadodk/fashionica',
    demo: 'https://fashionica-kd.myshopify.com',
    category: "shopify"
  },
  {
    id:6,
    image: IMG6,
    title:"NextJS Headless Shopify",
    github: 'https://github.com/khoadodk/next-shopify',
    demo: 'https://next-shopify-ruby.vercel.app',
    category: "shopify"
  },
  {
    id:1,
    image: IMG1,
    title:"Newsletter email",
    demo: 'https://newssletter-email.netlify.app',
    github: 'https://github.com/khoadodk/newsletter-email',
    category: "email"
  },
  {
    id:2,
    image: IMG2,
    title:"Shopping Cart email",
    github: 'https://github.com/khoadodk/cart-email',
    demo: 'https://cart-email.netlify.app',
    category: "email"
  }
]

const Portfolio = () => {

  const [catergory, setCategory] = useState(data)

  const filterCat = item => {
    const result = data.filter((currentCat) => {
      return currentCat.category === item;
    })
    setCategory(result);
  }

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="category">
        <button className='btn' onClick={() => setCategory(data)}>All</button>
        <button className='btn' onClick={() => filterCat('wordpress')}>Wordpress</button>
        <button className='btn' onClick={() => filterCat('shopify')}>Shopify</button>
        <button className='btn' onClick={() => filterCat('javascript')}>Javascript</button>
        <button className='btn' onClick={() => filterCat('react')}>React</button>
        <button className='btn' onClick={() => filterCat('email')}>Email</button>
      </div>
      <div className="container portfolio__container">
       
        {
          catergory.map(({id, image, title, github, demo}) => {
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