import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
// import ParticlesBackground from "./components/ParticlesBackground"; // Uncomment if needed
import React from "react";
import IntroAnimation from "./components/IntroAnimation";
import Footer from "./sections/Footer";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          
          {/* FIX 4: Fixed comment syntax */}
          {/* <ParticlesBackground /> */}
          
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}