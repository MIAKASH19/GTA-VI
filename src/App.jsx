import React from "react";
import WorkButton from "./Components/WorkButton";
import RippleButton from "./Components/RippleButton";

const App = () => {
  return (
    <div className="bg-zinc-900 text-white flex items-start justify-start w-full h-screen p-20 gap-20">
      <WorkButton />
      <RippleButton>Get Started</RippleButton>
    </div>
  );
};

export default App;
