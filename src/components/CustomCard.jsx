import React from "react";
import { Box } from "@mui/system";
import CardComponent from "./CardComponent/CardComponent";
import SideBar from "./SideBar/SideBar";
// import Carousel from "./Carousel/Carousel";

function CustomCard() {
  const dummyData = [
    {
      img: "https://images.unsplash.com/photo-1633534814099-685f19197c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      name: "Lizard",
      catrgory: "any",
      location: "kandy",
      mobile: "0761234567",
      ratingvalue: "3",
    },
    {
      img: "https://th.bing.com/th/id/R.695af5db561e2ef6ad3bd8e5cf9e0082?rik=SOK7JLeiUJsWHw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-JfVO_Hwqlb4%2fTlOjgETXGnI%2fAAAAAAAAAc4%2fKYiJ_rRA5vA%2fs1600%2ftree_frog_3.jpg&ehk=QNLnjiJdoFFs771f%2bE8VdKhLL2VZhyKWKX4VT6Puop8%3d&risl=&pid=ImgRaw&r=0",
      name: "Frog",
      catrgory: "any",
      location: "kandy",
      mobile: "0761234567",
      ratingvalue: "3",
    },
    {
      img: "https://th.bing.com/th/id/R.cfcea7bab839544cbd50bad837242ed3?rik=i38TTljz3p%2foig&pid=ImgRaw&r=0",
      name: "Dog",
      catrgory: "any",
      location: "kandy",
      mobile: "0761234567",
      ratingvalue: "3",
    },
    {
      img: "https://th.bing.com/th/id/R.cfcea7bab839544cbd50bad837242ed3?rik=i38TTljz3p%2foig&pid=ImgRaw&r=0",
      name: "Dog",
      catrgory: "any",
      location: "kandy",
      mobile: "0761234567",
      ratingvalue: "3",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <SideBar />
        <Box
          sx={{
            marginLeft: 10,
            marginTop: 0,
            height: "85vh",
            overflowY: "auto",
            width: "80vw",
          }}
        >
          {/* <Carousel /> */}
          {dummyData.map((item, index) => (
            <CardComponent data={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CustomCard;
