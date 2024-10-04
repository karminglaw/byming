import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./components/css/styles.css";
import "./components/css/ScrollSections.css";
import ScrollSections from './components/Home1';
import Who from './components/Who';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,  // Reduced from 1.2 to 0.8
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.5,  // Increased from 1 to 1.5
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        {/* <Home/>
        <Experience/>
        <Projects/> */}
        <ScrollSections/>

      </main>
    </div>
  );
}

export default App;