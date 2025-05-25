import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const onLoad = () => {
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
            document.querySelector(".svg")?.remove();
            setShowContent(true);
            this.kill();
          }
        },
      });
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.4",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.4",
      ease: "Expo.easeInOut",
    });
    gsap.to(".girl", {
      scale: 1.1,
      bottom: "-35%",
      duration: 2,
      delay: "-.4",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1,
      // delay: "-.8",
      ease: "Expo.easeInOut",
    });

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
        x: xMove * 0.5,
        y: yMove * 0.5,
      });
      gsap.to(".sky", {
        x: xMove * 1.5,
        y: yMove * 1.5,
      });
      gsap.to(".bg", {
        x: -xMove,
        y: -yMove,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg
          viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
          preserveAspectRatio="xMidYMid slice"
        >
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
            href="./City.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main relative rotate-[-10deg] scale-[1.8] bg-black w-full text-white overflow-hidden">
          <div className="landing overflow-hidden relative w-full h-[110vh] bg-black">
            <div className="navbar px-5 sm:px-7 py-5 fixed top-0 left-0 w-full z-[10]">
              <div className="logo  flex items-center gap-4">
                <div className="lines flex flex-col sm:gap-[5px] gap-1">
                  <div className="line w-10 h-[3px] sm:h-[5px] bg-white"></div>
                  <div className="line w-7 h-[3px] sm:h-[5px] bg-white"></div>
                  <div className="line w-5 h-[3px] sm:h-[5px] bg-white"> </div>
                </div>
                <h2 className="sm:text-3xl text-lg sm:-mt-3 -mt-2">Rockstar</h2>
              </div>
            </div>
            <div className="imgagesdiv relative w-full h-screen overflow-hidden">
              <img
                src="./sky.png"
                className="scale-[1.7] rotate-[-3deg] sky absolute top-0 left-0 w-full h-full object-cover"
              />
              <img
                src="./bg.png"
                className=" scale-[1.7] rotate-[-3deg] bg absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="text flex  flex-col gap-3 absolute sm:top-10 top-20 rotate-[-20deg] opacity-0 left-1/2 -translate-x-1/2 ">
                <h1 className="sm:text-8xl text-7xl leading-none -ml-5 sm:-ml-20">
                  grand
                </h1>
                <h1 className="sm:text-8xl text-7xl leading-none ml-10 sm:ml-20">
                  theft
                </h1>
                <h1 className="sm:text-8xl text-7xl leading-none -ml-5 sm:-ml-10">
                  auto
                </h1>
              </div>
              <img
                src="./girlbg.png"
                className="girl absolute left-1/2 -translate-x-1/2 -bottom-[150%] scale-[2] sm:scale-[1.25] w-full h-full object-contain"
              />
            </div>
            <div className="bottombar z-[5]  flex items-baseline justify-center absolute bottom-16  py-15 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent">
              <div className="sm:flex hidden  left-8 w-fit items-center absolute bottom-5 gap-1">
                <i className="ri-arrow-down-long-line sm:text-2xl text-md text-zinc-200"></i>
                <h3 className="font-[Manrope] text-zinc-200 text-sm">
                  Scroll down
                </h3>
              </div>
              <img src="./ps5.png" className="h-10 mb-3" />
            </div>
          </div>
          <div className="about w-full min-h-screen flex sm:flex-row flex-col-reverse gap-20 sm:gap-0 items-center justify-between px-5 sm:px-10">
            <div className="limg  w-full sm:w-1/2 ">
              <img
                className="scale-[1.3] sm:scale-[1]"
                src="./imag.png"
                alt="Girl Image"
              />
            </div>
            <div className="rg sm:w-1/2 w-full">
              <h1 className="text-6xl bg-gradient-to-t from-[#ffb574] via-pink-500 to-[#5460D3] bg-clip-text text-transparent">
                Stil Running,
              </h1>
              <h1 className="text-6xl bg-gradient-to-t from-[#ffb574] via-pink-500 to-[#5460D3] bg-clip-text text-transparent">
                Not Hunting
              </h1>
              <p className="text-lg leading-none font-[Arial] font-medium tracking-tight mt-14 sm:mt-5 sm:pr-20">
                The game will feature a compelling narrative told through the
                perspectives of a new criminal duo, Lucia and Jason. Expect a
                satirical take on modern American culture, from social media
                trends to influencer phenomena, all within the context of their
                unfolding story.
              </p>
              <p className="text-lg leading-none font-[Arial] font-medium tracking-tight mt-5 sm:pr-20">
                Rockstar Games promises significant advancements in graphics,
                physics, and AI, aiming to create an unprecedentedly realistic
                and dynamic open world.{" "}
              </p>
              <p className="text-lg leading-none font-[Arial] font-medium tracking-tight my-5 sm:pr-20">
                With its sprawling map, diverse environments, and a wealth of
                interactive opportunities, Grand Theft Auto VI is poised to
                redefine the open-world genre once again.
              </p>
              <button className="sm:px-8 px-4 py-2 sm:py-3 bg-gradient-to-b text-md sm:text-xl cursor-pointer hover:bg-gradient-to-t from-[#D940A5] to-[#4962D3] hover:from-[#D940A5] hover:to-[#4962D3] duration-500">
                Download Now
              </button>
            </div>
          </div>
          <div className="footer bg-black flex items-center justify-center  w-full  py-5 sm:py-0 sm:min-h-[40vh] px-8">
            <div className=" flex items-center sm:flex-row flex-col  gap-5">
              <h1 className="sm:text-[9rem] hdden sm:block text-[2rem]  bg-gradient-to-t from-[#ffb574] via-pink-500 to-[#5460D3] bg-clip-text text-transparent">
                grand theft auto
              </h1>
              <div className="bg-re-500 sm:flex items-end w-30 h-27">
                <img src="./GTAFoot.png" className="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
