import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Slider from "./components/Slider/Slider";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Slider />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
