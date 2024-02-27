import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Slider from "./components/Slider/Slider";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./components/AboutPage/About";
import FAQ from "./components/FAQ/FAQ";
import Details from "./components/Details/Details";

function App() {
  const showSlider = window.location.pathname === "/";
  return (
    <div className='App'>
      <NavigationBar />
      {showSlider && <Slider />}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='details' element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
