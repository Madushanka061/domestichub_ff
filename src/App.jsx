import React, { useEffect } from "react";
import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/pages/Home";
import Signup from "./components/SignUP/Signup";
import Login from "./components/SignUP/Login";

function App() {
  useEffect(() => {
    document.title = "Domestichub -Home";
  }, []);

  return (
    <>
      <Login />
      {/* <Signup /> */}
      {/* <Home /> */}
    </>

    //   // {/* <Router>

    //     <Routes>
    //       <Route path='/' exact component={Home} />
    //     </Routes>
    // </Router> */}
  );
}

export default App;
