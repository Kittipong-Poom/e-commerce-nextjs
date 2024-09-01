"use client";
import Figure from "./Figure";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const PopularFigureCarousel = ({ figures }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable:true,
      }}
      modules={[Pagination]}
      className="popular-figure-slider mb-8"
    >
      {figures.map((figure, index) => {
        return (
          <SwiperSlide key={figure.id || index}>
            <Figure figure={figure} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularFigureCarousel;
