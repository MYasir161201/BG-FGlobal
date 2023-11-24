import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Reason from "./Components/Reason";
import ExpertiseNService from "./Components/ExpertiseNServices";
import Products from "./Components/Products";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <About />
      <Reason />
      <ExpertiseNService />
      <Products />
      <Testimonial />
      
      <Contact />
    </>
  );
}

export default App;
