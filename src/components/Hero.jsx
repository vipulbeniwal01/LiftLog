import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Serious", "Stronger", "Results"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          <span className='inline-block min-w-[100px]'>{typeEffect}</span>
        </h1>
      </div>
      <p className='text-sm md:text-base font-light'>
        I <span className='text-red-400 font-medium'>solemnly swear to </span>
        log my lifts, crush my goals, and{" "}
        <span className='text-red-400 font-medium'>
        stay committed to my fitness journey
        </span>{" "}. I promise to{" "}
        <span className='text-red-400 font-medium'> celebrate every PR</span> ,
        even if it means doing a victory dance in the gym. Most importantly,
        I vow to{" "}
        <span className='text-red-400 font-medium'>
          have fun and stay motivated{" "}
        </span>{" "}
        and always remember that sweat is just my fat crying . Let's lift and thrive!
      </p>
      <button
        className='px-8 py-4 rounded-md border-[2px] border-red-400 border-solid redShadow duration-200'
        style={{ backgroundColor: "#1F0021" }}
        onClick={() => (window.location.href = "#generate")}
      >
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
