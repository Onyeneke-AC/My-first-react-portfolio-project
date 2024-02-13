import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../../../atoms/Button';

function Services() {
  return (
    <div className="services">
        <h2 className="sub_h2">
            Our Services
        </h2>
        <Swiper spaceBetween={20}  speed={800}  slidesPerView={1}  className='swiper-service'>
            <SwiperSlide className="swipe-me serv1">
                <div className="serv">    
                    <i className="fas fa-caret-up" />
                     <h3 className="serv_h3">
                        Advisory
                    </h3>
                    <p>
                        We help deliver better-quality business performance by addressing the IT and business agendas together; an effective, well-managed IT system is one of the most valuable business advantages an organization can secure.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swipe-me serv2">
                <div className="serv">
                    <i className="fas fa-caret-up" />
                    <h3 className="serv_h3">
                        Information Technology
                    </h3>
                    <p>
                        Our managed services are ideal if you don't have what you need in-house for day-to-day management, we do the work and you get the valuable information you need for your organization.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swipe-me serv3">
                <div className="serv">
                    <i className="fas fa-caret-up" />
                    <h3 className="serv_h3">
                        Managed Services
                    </h3>
                    <p>
                        We improve your business for innovation and growth while driving bottom-line benefits to drive growth, eliminate downtime, scale operations and improve application availability with the procedure management of IT resources.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="btn_int">
            <Button className='btns' buttonStyle='btn--primary' buttonRoute='/clients' buttonSize='btn--normal'>
                    Read more
            </Button>
      </div>
    </div>
  )
}

export default Services
