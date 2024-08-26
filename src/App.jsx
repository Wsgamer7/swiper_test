import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        noSwipingClass="J_scroll"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-flamingo-free-image.jpeg?w=2210&quality=70" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Message />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
function Message() {
  const arr = new Array(50).fill(0);
  return (
    <div className="message-container">
      {arr.map((item, i) => {
        return <div>{i}</div>;
      })}
    </div>
  );
}
