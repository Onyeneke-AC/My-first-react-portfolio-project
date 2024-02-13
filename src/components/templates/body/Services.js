import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Services() {
  return (
    <div className="services">
        <h2 className="sub_h2">
            Our Services
        </h2>
        <Swiper spaceBetween={20}  speed={800}  slidesPerView={1}  className='swiper-service'>
            <SwiperSlide className="swiper-slide">
                <div className="serv1">
                    <div className="serv">    
                        <i className="fas fa-caret-up" />
                         <h3 className="serv__h3">
                            Advisory
                        </h3>
                        <p>
                            We help deliver better-quality business performance by addressing the IT and business agendas together; an effective, well-managed IT system is one of the most valuable business advantages an organization can secure.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="serv2">
                    <div className="serv">
                        <i className="fas fa-caret-up" />
                        <h3 className="serv__h3">
                            Information Technology
                        </h3>
                        <p>
                            Our managed services are ideal if you don't have what you need in-house for day-to-day management, we do the work and you get the valuable information you need for your organization.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="serv2">
                    <div className="serv">
                        <i className="fas fa-caret-up" />
                        <h3 className="serv__h3">
                            Managed Services
                        </h3>
                        <p>
                            We improve your business for innovation and growth while driving bottom-line benefits to drive growth, eliminate downtime, scale operations and improve application availability with the procedure management of IT resources.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Services
