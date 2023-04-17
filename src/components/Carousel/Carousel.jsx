import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";

function Carousel() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={900}
        parallax={true}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://plus.unsplash.com/premium_photo-1663040345603-fe0968d5d514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            DOMESTICHUB
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image": "url(images/service images/1.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            DOMESTICHUB
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://img.freepik.com/premium-photo/construction-worker-wearing-safety-harness-belt-during-working-roof-structure-building-construction-site_64073-444.jpg?w=740)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            DOMESTICHUB
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={images[1]} alt="2nd" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Carousel;
