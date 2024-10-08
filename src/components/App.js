// src/App.jsx
import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoTrack from "./CryptoTrack";
import Login from "./Login";
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Signup from "./SignUp";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    
    
        <div className="App">
          {/* Navbar for the App */}
          <NavBar />
          <Routes>
            <Route path="/" element={<CryptoTrack />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="services" element={<Services />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            {/* Add your protected routes here, if necessary */}
          </Routes>
        </div>
  
  );
}

export default App;
