import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToOrder from "./components/HowToOrder";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Comission from "./components/Comission";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowToOrder />
      <Benefits />
      <Testimonials />
      <Comission />
    </>
  );
}

export default App;
