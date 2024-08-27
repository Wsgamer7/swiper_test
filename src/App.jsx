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
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    console.log("Current slide index is:", swiper.activeIndex);
  };
  return (
    <>
      <Swiper
        direction={"vertical"}
        // noSwipingClass="J_scroll"
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Header className="flex-fixlength" />
          <div className="flex-growlength">
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-flamingo-free-image.jpeg?w=2210&quality=70" />
          </div>
          <div>Current slide index: {activeIndex}</div>
          <Header className="flex-fixlength" />
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <img src="https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france.jpg" />
          <div>Current slide index: {activeIndex}</div>
          <Header />
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <Swiper nested={true} freeMode={true} className="swiper-nested">
            <SwiperSlide className="swiper-no-swiping">
              <Message />
            </SwiperSlide>
          </Swiper>
          <div>Current slide index: {activeIndex}</div>
          <Header />
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
    <div className="message-container swiper-no-swiping">
      {arr.map((item, i) => {
        return <div>{i}</div>;
      })}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <input />
    </div>
  );
}
