import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Signup from "./components/SignUP/Signup";
import Login from "./components/SignUP/Login";
// import Footer from "./components/Fotter/Footer";
import UserProfile from "./components/SignUP/UserProfile";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/ContactUs";
import PostJob from "./components/pages/PostJob";
import Footer from "./components/Fotter/Footer";
import ServiceProfile from "./components/pages/ServiceProfile";

function App() {
  useEffect(() => {
    document.title = "Domestichub -Home";
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/job" element={<PostJob />} />
          <Route path="/service-profile" element={<ServiceProfile />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
