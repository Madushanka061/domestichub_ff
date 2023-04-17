import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import CardComponent from "./CardComponent/CardComponent";
import SideBar from "./SideBar/SideBar";
import { CssBaseline, GlobalStyles } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import Navbar from "./Navbar";
import axios from "axios";

function CustomCard() {
  const [providers, setProviders] = useState();
  useEffect(() => {
    let config = {
      method: "get",
      url: "http://localhost:8080/api/v1/service_provider/getallproviders",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setProviders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 0,
        }}
      >
        <SideBar />
        <Box
          sx={{
            marginLeft: "1px",
            marginTop: 0,
            // height: "100vh",
            overflowY: "auto",
            width: "80vw",
          }}
        >
          <Carousel />
          <Box
            sx={{
              marginBottom: 2,
            }}
          >
            {providers?.map((item, index) => (
              <CardComponent data={item} key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CustomCard;
