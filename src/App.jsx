import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 20,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      console.log(e.clientX, e.clientY);

      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 50;

      gsap.to(".main .text", {
        x: `${-xMove * 0.4}%`,
        y: `${-yMove * 0.4}%`,
      });
      gsap.to(".girl", {
        x: xMove * .5,
        y: yMove * .5,
      });
      gsap.to(".sky", {
        x: xMove * 1.5,
        y: yMove * 1.5,
      });
      gsap.to(".bg", {
        x: -xMove ,
        y: -yMove ,
      });
    });
  }, [showContent]);

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
            href="./Gta.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main bg-black w-full h-full text-white overflow-x-hidden">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar  px-7 py-5 fixed top-0 left-0 w-full z-[10]">
              <div className="logo flex items-center gap-4">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-10 h-[5px] bg-white"></div>
                  <div className="line w-7 h-[5px] bg-white"></div>
                  <div className="line w-5 h-[5px] bg-white"> </div>
                </div>
                <h2 className="text-3xl -mt-3">Rockstar</h2>
              </div>
            </div>
            <div className="imgagesdiv relative w-full h-screen overflow-hidden">
              <img
                src="./sky.png"
                className=" scale-[1.2] sky absolute top-0 left-0 w-full h-full object-cover"
              />
              <img
                src="./bg.png"
                className=" scale-[1.2] bg absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className=" text flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 ">
                <h1 className="text-8xl leading-none -ml-20">grand</h1>
                <h1 className="text-8xl leading-none ml-20">theft</h1>
                <h1 className="text-8xl leading-none -ml-10">auto</h1>
              </div>
              <img
                src="./girlbg.png"
                className=" girl absolute left-1/2 -translate-x-1/2 -bottom-[35%] scale-[1.25] w-full h-full object-contain"
              />
            </div>
            <div className="bottombar z-[4] flex items-baseline justify-center absolute bottom-0 py-15 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex left-8 w-fit items-center absolute bottom-5 gap-1">
                <i className="ri-arrow-down-long-line text-2xl text-zinc-200"></i>
                <h3 className="font-[Manrope] text-zinc-200 ">Scroll down</h3>
              </div>
              <img src="./ps5.png" className="h-10 mb-3" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
