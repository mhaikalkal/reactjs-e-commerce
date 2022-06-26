import React from "react";
// import HeroBanner from "../../assets/img/hero.jpg";
import Carousel from "./Carousel";

function Hero() {
  return (
    <section id="hero" className="px-6 py-3 top-0 mt-4 max-w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-1">
          <div className="hero-left w-[60%]">
            <div className="carousel overflow-hidden h-[360px] rounded">
              <div className="bg-indigo-400 w-full h-full"></div>
            </div>
          </div>

          <div className="hero-right w-[40%]">
            <div className="flex flex-col gap-1 h-[360px]">
              <div className="bg-pink-400 w-full h-full rounded"></div>
              <div className="bg-yellow-400 w-full h-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTest() {
  return (
    <section id="hero" className="mt-4 max-w-full">
      <div className="container w-full overflow-hidden mx-auto rounded-md">
        {/* <img src={HeroBanner} alt="shoes" className="w-full bg-contain" /> */}
        <Carousel />
      </div>
    </section>
  );
}

export default HeroTest;
