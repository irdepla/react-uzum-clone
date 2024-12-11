import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle"
import Slide1 from "../../assets/images/slide1.png";
import Slide2 from "../../assets/images/slide2.png";
import Slide3 from "../../assets/images/slide3.png";



export default () => {
  return (
    <div className="container">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={Slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={Slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={Slide3} alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};