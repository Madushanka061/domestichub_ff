import React from "react";
import Navbar from "../Navbar";
import Carousel from "../Carousel/Carousel";
import { Box } from "@mui/material";
import CardHcomp from "../CardHome/CardHcomp";

function Home() {
  return (
    <>
      <Box sx={{ backgroundColor: "rgba(222,228,236,1)" }}>
        <Navbar />
        <Carousel />
        <CardHcomp />
      </Box>
    </>
  );
}

export default Home;
