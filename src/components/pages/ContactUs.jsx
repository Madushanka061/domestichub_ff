import React from "react";
import Navbar from "../Navbar";
import { CssBaseline, GlobalStyles } from "@mui/material";

function ContactUs() {
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
    </>
  );
}

export default ContactUs;
