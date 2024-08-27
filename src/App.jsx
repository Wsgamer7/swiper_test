import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css/free-mode";
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    console.log("Current slide index is:", swiper.activeIndex);
  };
  return (
    <Swiper pagination={{ clickable: true }} direction="vertical">
      <SwiperSlide>Slide1</SwiperSlide>
      <SwiperSlide>
        <Swiper
          modules={[FreeMode, Mousewheel]}
          slidesPerView="auto"
          nested={true}
          resistanceRatio={0}
          freeMode={{ enabled: true }}
          mousewheel={{ releaseOnEdges: true }}
          scrollbar={{ draggable: true, hide: true }}
          direction="vertical"
          className="swiper-container2"
        >
          <SwiperSlide>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
            <div>1231</div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>Slide3</SwiperSlide>
      <SwiperSlide>Slide4</SwiperSlide>
    </Swiper>
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
