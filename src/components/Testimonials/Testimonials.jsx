import React from 'react';
import { Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./Testimonials.css";
import IMG1 from '../../assets/avatar1.jpg';
import IMG2 from '../../assets/avatar2.jpg';
import IMG3 from '../../assets/avatar3.jpg';

const data = [
  {
    id: 1,
    name: 'Emma Watson',
    avatar: IMG1,
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officiis non possimus, at voluptatum temporibus animi sint voluptates velit quia.'
  },
  {
    id: 2,
    name: 'Emma Watson',
    avatar: IMG2,
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officiis non possimus, at voluptatum temporibus animi sint voluptates velit quia.'
  },
  {
    id: 3,
    name: 'Emma Watson',
    avatar: IMG3,
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officiis non possimus, at voluptatum temporibus animi sint voluptates velit quia.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
          modules={[Pagination, Pagination, Autoplay]} 
          spaceBetween={40}
          slidesPerView={1}
          pagination={{clickable: true}}
          autoplay={true}
      > 
        {
          data.map(({id, name, avatar, review}) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials