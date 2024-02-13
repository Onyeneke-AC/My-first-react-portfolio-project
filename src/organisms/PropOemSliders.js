// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import './PropOemSliders.css';
import { useRef } from 'react';

function PropOemSliders({dataItem = []}) {

  const swiperNavPrevRef = useRef();
  const swiperNavNextRef = useRef();

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation = {{
        prevEl: swiperNavPrevRef,
        nextEl: swiperNavNextRef
      }}
      pagination={{clickable: true}}
      effect={'slide'}
      spaceBetween={70}
      slidesPerView={4}
      slidesPerGroup={4}
      speed={800}
      loop={"true"}
      className='swipe'
      id='swipe'
      
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      
      autoplay={{ delay: 10000,
      disableOnInteraction: false }}
      >
      {dataItem.map( item => 
      <SwiperSlide className="swipe-slide">
        <figure className='fig'>
        <img src={item.src} alt={item.alt} className='swipe-img'/>
        <figcaption className='figcap'>{item.alt}</figcaption>
        </figure>
      </SwiperSlide>
      )
      }
    <div ref={swiperNavPrevRef} className="swiperNavPrev">
      <i class="fas fa-angle-left" />
    </div>
    <div ref={swiperNavNextRef} className= "swiperNavNext">
      <i class="fas fa-angle-right" />
    </div>
    </Swiper>
  );
};

export default PropOemSliders;