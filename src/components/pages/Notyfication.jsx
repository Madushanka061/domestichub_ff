import { Box, CssBaseline, GlobalStyles, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Notyfication() {
  return (
    <>
      <GlobalStyles
        styles={{
          ul: { margin: 0, padding: 0, listStyle: "none" },
          backgroundColor: "rgba(222,228,236,1)",
        }}
      />
      <CssBaseline />

      <Navbar />
      <Box sx={{ marginBottom: "60vh" }}>
        <Typography variant="h3" color="GrayText">
          NOTIFICATION
        </Typography>
      </Box>
    </>
  );
}

export default Notyfication;
