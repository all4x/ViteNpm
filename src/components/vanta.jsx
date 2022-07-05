import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import App from "../App.tsx";

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x8080c,
          color1: 0xe334a5,
          color2: 0x4e01c3,
          colorMode: "lerp",
          birdSize: 0.7,
          wingSpan: 11.0,
          speedLimit: 4.0,
          separation: 5.0,
          alignment: 13.0,
          cohesion: 1.0,
          quantity: 3.0,
          backgroundAlpha: 0.85,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef}>
      <App />
    </div>
  );
};

export default MyComponent;

// myRef.current,
