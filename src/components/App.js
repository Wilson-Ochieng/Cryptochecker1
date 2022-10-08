import React from "react";
import { Routes, Route } from "react-router-dom";
import CryptoTrack from "./CryptoTrack";
import Login from "./Login"
import Services from "./Services"
import About from "./About"
import Blog from "./Blog"



function App({}) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CryptoTrack />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
