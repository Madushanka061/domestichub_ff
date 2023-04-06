import React, { useEffect } from "react";
import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/pages/Home";

function App() {
  useEffect(() => {
    document.title = "Domestichub -Home";
  }, []);

  return (
    <>
      <Home />
    </>

    //   // {/* <Router>

    //     <Routes>
    //       <Route path='/' exact component={Home} />
    //     </Routes>
    // </Router> */}
  );
}

export default App;
