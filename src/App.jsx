import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import HowToOrder from "./components/HowToOrder/HowToOrder";
import Benefits from "./components/Benefits/Benefits";
import Testimonials from "./components/TestimonialSection/Testimonials";
import Comission from "./components/Comission/Comission";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
