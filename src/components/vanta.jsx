import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.net.min.js";
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
          color: 0x484193,
          backgroundColor: 0xe1e1e1,
          points: 3.0,
          maxDistance: 11.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className="h-screen">
      <App />
    </div>
  );
};

export default MyComponent;

// myRef.current,
