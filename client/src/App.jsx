import React from "react";
import "./App.css";
import { BrowserRouter , Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BannerSlider from "./components/bannerloader";
function App() {
  return (
  <>
    <NavBar />
    <BannerSlider />
  </>
  );
}

  export default App;