import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToOrder from "./components/HowToOrder";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowToOrder />
    </>
  );
}

export default App;
