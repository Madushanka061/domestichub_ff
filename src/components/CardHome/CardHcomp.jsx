import React from "react";
import CardHome from "./CardHome";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

function CardHcomp() {
  const carddata = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image:
        "https://plus.unsplash.com/premium_photo-1663040345603-fe0968d5d514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Electrician",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "House Cleaning",
      image:
        "https://images.unsplash.com/photo-1607720146778-68d2d56fa38c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image:
        "https://plus.unsplash.com/premium_photo-1663040345603-fe0968d5d514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Electrician",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image:
        "https://plus.unsplash.com/premium_photo-1663040345603-fe0968d5d514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Electrician",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "House Cleaning",
      image:
        "https://images.unsplash.com/photo-1607720146778-68d2d56fa38c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "House Cleaning",
      image:
        "https://images.unsplash.com/photo-1607720146778-68d2d56fa38c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "House Cleaning",
      image:
        "https://images.unsplash.com/photo-1607720146778-68d2d56fa38c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    },
  ];

  console.log(typeof carddata);

  return (
    <>
      <Box
        sx={{
          marginY: 5,
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          placeItems: "center",
          height: 500,
          backgroundColor: "rgba(3,2,19,1)",
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {carddata?.map((data, i) => (
            <SwiperSlide style={{ backgroundColor: "rgba(3,2,19,1)" }} key={i}>
              <CardHome item={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default CardHcomp;

const styles = {
  root: {
    maxWidth: 600,

    transition: "transform .2s",
    "&:hover": {
      transform: "scale(3.05)",
    },
  },
  media: {
    height: "150px",
  },
};
