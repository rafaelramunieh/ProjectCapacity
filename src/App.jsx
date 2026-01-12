import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToOrder from "./components/HowToOrder";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowToOrder />
      <Benefits />
    </>
  );
}

export default App;
