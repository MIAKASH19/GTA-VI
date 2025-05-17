import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const App = () => {

  let [showContent, setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2, 
      ease: "Power4.easeInOut",
      transformOrigin : "50% 50%",
    })
    .to(".vi-mask-group", {
      scale: 20,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9 ){
          document.querySelector(".svg").remove()
          setShowContent(true);
          this.kill();
        }
      }
    })

  })

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      <div className="main bg-black w-full h-full">
        <h1>Hellow Akash</h1>
        <div className="landing w-full h-screen bg-black">
          <div className="imgagesdiv w-full h-screen">
            <img src="./bg.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
