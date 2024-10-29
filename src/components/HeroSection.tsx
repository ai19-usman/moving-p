import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { MovingBorder } from "./ui/moving-border";
const HeroSection= () =>
  {return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden mx-auto py-10 md:py-0">
   <Spotlight
        className="-top-30 left-0 md:left-60 md:-top-20"
        fill="green" /> 
      <div className=" p-4 relative z-10  w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the cref of coding ">
           Master the Cref of Coding.
        </h1>
        <p className="mt-8 font-bold text-base text-neutral-300 max-w-lg  mx-auto">
          Dive into our comprehensive</p>
         <div className="mt-4 font normal text-base md:text-text-neutral-300 max-w-full mx-auto">
         <Link href="/coures">
         <Button borderRadius="1.75rem" className= "bg-black text-white boarder-slate-800">
          EXPLORE COURES
         </Button>
         </Link>
         </div>
      </div>
    </div>
    
  );
}
 export default HeroSection