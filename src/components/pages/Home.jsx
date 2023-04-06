import React from "react";
import Carousel from "../Carousel/Carousel";

import CustomCard from "../CustomCard";
import Navbar from "../Navbar";

const linksArray = ["post Job", "Services", "Contact Us"];
function Home() {
  return (
    <>
      <Navbar links={linksArray} />
      {/* <Carousel /> */}

      <CustomCard />

      {/* <Login /> */}
    </>
  );
}

export default Home;
