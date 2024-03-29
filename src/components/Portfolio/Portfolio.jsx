import { useState } from 'react';
import './Portfolio.css';
// import IMG1 from '../../assets/portfolio1.png';
// import IMG2 from '../../assets/portfolio2.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';
import IMG9 from '../../assets/portfolio9.png';
// import IMG10 from '../../assets/portfolio10.png';
import IMG11 from '../../assets/portfolio11.png';
import IMG12 from '../../assets/portfolio12.png';
import IMG13 from '../../assets/portfolio13.png';
import IMG15 from '../../assets/portfolio15.png';

const data = [
  {
    id: 12,
    image: IMG12,
    title: 'Headless Shopify',
    github: 'https://github.com/khoadodk/next-shopify',
    demo: 'https://next-shopify-ruby.vercel.app',
    category: 'shopify',
  },
  {
    
    id: 15,
    image: IMG15,
    title: 'WooCommerce Theme',
    github: 'https://github.com/khoadodk/color-me',
    demo: 'http://colorme.beauty',
    category: 'wordpress',
  },
  {
    id: 11,
    image: IMG11,
    title: 'Shopify Theme',
    github: 'https://github.com/khoadodk/shop-tailwind',
    demo: 'https://shop-tailwind.myshopify.com',
    category: 'shopify',
  },
  {
    id: 13,
    image: IMG13,
    title: 'WordPress Theme',
    github: 'https://github.com/khoadodk/city-wp',
    demo: 'http://khoado.me',
    category: 'wordpress',
  },
  {
    id: 9,
    image: IMG9,
    title: 'The Normies NFT',
    github: 'https://github.com/khoadodk/the-normies',
    demo: 'https://kd-the-normies.netlify.app',
    category: 'react',
  },
  {
    id: 8,
    image: IMG8,
    title: 'K Studio',
    github: 'https://github.com/khoadodk/k-studio',
    demo: 'https://k-studio.netlify.app',
    category: 'react',
  },
  // {
  //   id: 14,
  //   image: IMG14,
  //   title: 'Shopify Theme',
  //   github: 'https://github.com/khoadodk/drake-related',
  //   demo: 'https://theme-related.myshopify.com',
  //   category: 'shopify',
  // },
  {
    id: 6,
    image: IMG6,
    title: 'Landin',
    github: 'https://github.com/khoadodk/landin',
    demo: 'https://kd-landin.netlify.app',
    category: 'javascript',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Qrispy',
    github: 'https://github.com/khoadodk/qrispy',
    demo: 'https://kd-qrispy.netlify.app',
    category: 'javascript',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Shopify Theme',
    github: 'https://github.com/khoadodk/fashionica',
    demo: 'https://fashionica-kd.myshopify.com',
    category: 'shopify',
  },
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: 'Newsletter email',
  //   demo: 'https://newssletter-email.netlify.app',
  //   github: 'https://github.com/khoadodk/newsletter-email',
  //   category: 'email',
  // },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: 'Shopping Cart email',
  //   github: 'https://github.com/khoadodk/cart-email',
  //   demo: 'https://cart-email.netlify.app',
  //   category: 'email',
  // }
];

const Portfolio = () => {
  const [catergory, setCategory] = useState(data);

  const filterCat = (item) => {
    const result = data.filter((currentCat) => {
      return currentCat.category === item;
    });
    setCategory(result);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="category">
        <button
          className="btn btn-primary"
          onClick={() => setCategory(data)}
        >
          All
        </button>
        <button
          className="btn btn-primary"
          onClick={() => filterCat('react')}
        >
          React
        </button>
        <button
          className="btn btn-primary"
          onClick={() => filterCat('shopify')}
        >
          Shopify
        </button>
        <button
          className="btn btn-primary"
          onClick={() => filterCat('wordpress')}
        >
          Wordpress
        </button>
        <button
          className="btn btn-primary"
          onClick={() => filterCat('javascript')}
        >
          Javascript
        </button>
      </div>
      <div className="container portfolio__container">
        {catergory.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image" >
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
