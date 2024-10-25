import React from "react";

function AdviceBox({advice, adviceNumber, handleClick}) {
  return (
    <div className="flex flex-col items-center justify-center bg-dark_greyish_blue rounded-lg shadow-lg w-80 lg:w-[500px] p-5 relative">
      <div className="p-4">
        <h1 className="text-center font-mono tracking-widest text-neon_green uppercase text-xs">
          Advice #{adviceNumber}
        </h1>
      </div>
      <div className="p-2">
        <p className="text-center text-[28px] font-semibold text-light_cyan text-wrap">
          "{advice}"
        </p>
      </div>
      <div className="p-6">
        <img src="divider-desktop.svg" alt="" />
      </div>
      <div className="absolute bottom-[-30px] z-10">
        <button className="bg-neon_green rounded-full p-4 transition duration-300 ease-in-out transform hover:scale-105 lg:hover:shadow-[0_0_25px_10px_rgba(82,255,168,0.4)]" onClick={handleClick}>
          <img className="h-5 w-5" src="icon-dice.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default AdviceBox;
