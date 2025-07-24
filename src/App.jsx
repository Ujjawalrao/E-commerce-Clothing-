import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, easeIn } from 'framer-motion';
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "@studio-freight/lenis";  

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import TshirtNav from "./Pages/TshirtNav";
import ShirtNav from "./Pages/ShirtNav";
import Hoodies from "./Pages/Hoodies";
import Bottom from "./Pages/Bottom";
import Vests from "./Pages/Vests";
import Crops from "./Pages/Crops";

function App() {
  // scroll to top
  const { pathname } = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // lenis for smooth scrolling
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <>
      {/* Preloader Animation */}
      <motion.div 
        animate={{ y: -1700 }}
        transition={{ duration: 2, delay: 1 }}
        className="overflow-y-hidden h-screen w-screen absolute top-0 z-[100] bg-white flex justify-center items-center"
      >
        <motion.h1
          animate={{ y: 10 }}
          transition={{ ease: easeIn, delay: 1 }}
          className="font-tactic-sans-bold font-bold text-[1.2rem] lg:text-[80px] tracking-widest uppercase text-white mix-blend-difference absolute z-80"
        >
          Chapter2
          <sup className="font-thin text-[40px] font-serif">&#8482;</sup>
        </motion.h1>
        <motion.div
          animate={{ y: -1000 }}
          transition={{ duration: 2 }}
          className="bg-black h-screen w-screen"
        />
      </motion.div>

      {/* Scrollable content area */}
      <div id="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tshirts" element={<TshirtNav />} />
          <Route path="/Shirts" element={<ShirtNav />} />
          <Route path="/HOODIES" element={<Hoodies />} />
          <Route path="/BOTTOMS" element={<Bottom />} />
          <Route path="/VESTS" element={<Vests />} />
          <Route path="/CROPS" element={<Crops />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
