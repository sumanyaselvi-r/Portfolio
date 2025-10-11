import React from "react";
import GalaxyBackground from "./components/Background";
import Hero from "./components/Hero"; 
import About from "./components/About";
import Skills from "./components/SKill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
   
      <GalaxyBackground />
 <Navbar/>
      <section style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", color: "white" }}>
        <Hero/>
      </section>

      <section style={{ minHeight: "100vh", alignItems: "center", color: "white" }}>
      <About/>
        <Skills/>
<Projects/>    
  
      <Experience/>
      <ContactSection/>
      <Footer />
      </section>


      

     
    
    </div>
  );
}

export default App;
