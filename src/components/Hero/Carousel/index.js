import React, { useState, useEffect, useRef } from "react";
import hero1 from "../../../assets/img/hero/1.jpg";
import hero2 from "../../../assets/img/hero/2.jpg";
import hero3 from "../../../assets/img/hero/3.jpg";
import "./carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const carouselImage = [hero1, hero2, hero3];

// untuk handle index di handleClick
let index = 0;

// untuk assign setInterval, biar bisa mouseenter + mouseleave
let carouselInterval;

const Carousel = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    // initial start carousel
    startCarousel();

    // when paused
    carouselRef.current.addEventListener("mouseenter", pauseCarousel);
    carouselRef.current.addEventListener("mouseleave", startCarousel);

    // remove animation. when img changed the fade-anim is already there.
    // so when pic is already changed, immediately reomve the class
    carouselRef.current.addEventListener("animationend", removeAnimation);

    return () => {
      clearInterval(carouselInterval);
    };
  }, []);

  const startCarousel = () => {
    // setInterval = execute code didalem setiap n-seconds
    // setTimeout = execute code didalem hanya sekali setelah n-seconds
    carouselInterval = setInterval(() => {
      handleNextClick();
    }, 4000);
  };

  // pause when mouseenter
  const pauseCarousel = () => {
    // unset setInterval method
    clearInterval(carouselInterval);
  };

  const handlePrevClick = () => {
    setHeroIndex(() => {
      index = (heroIndex + carouselImage.length - 1) % carouselImage.length;
      return index;
    });

    // add animation opacity 0 to 1
    carouselRef.current.classList.add("fade-anim");
  };

  const handleNextClick = () => {
    setHeroIndex(() => {
      index = (index + 1) % carouselImage.length;
      return index;
    });

    // add animation opacity 0 to 1
    carouselRef.current.classList.add("fade-anim");
  };

  // to be called in useEffect to removeclass
  const removeAnimation = () => {
    carouselRef.current.classList.remove("fade-anim");
  };

  return (
    <div className="relative h-[550px] overflow-hidden" ref={carouselRef}>
      <div className="relative carousel bg-center h-full bg-no-repeat" style={{ backgroundImage: `url('${carouselImage[heroIndex]}')` }}>
        <div className="absolute mx-auto inset-x-5 top-[50%] bg-[rgba(1,1,1,0.2)] rounded-lg lg:top-[25%] lg:inset-x-[7.5%] p-5">
          <h1 className="text-white font-bold text-5xl">
            Finest <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text hover:cursor-pointer">Footwear</span> for Finest Peoples
          </h1>

          <p className="text-white font-semibold text-2xl">Improve your style</p>

          <div className="mt-7">
            <Link to="/prod">
              <button className="px-3 py-2 rounded-md text-white text-xl font-semibold bg-slate-500 hover:bg-slate-700 active:bg-slate-800 focus:outline-dashed focus:outline-offset-2 focus:outline-slate-200">Shop Now!</button>
            </Link>
          </div>
        </div>
      </div>

      {/* 
        kan elemen next & prev ini width-nya 100% dipakein justify-between. jadi ditengahnya meskipun kosong sebenernya ada elemennya
        defaultnya kita click ditengah-tengah itu sebenrnya bukan click hero. tapi si container button next prev
        maka dengan pointer-events-none, si containernya di ignore.
        untuk nge test. coba aja kasih bg color si containernya
       */}
      <div className="absolute w-full flex top-1/2 -translate-y-1/2 px-3 py-3 justify-between items-center pointer-events-none">
        {/* 
          button-nya harus di pointer-events-auto 
          soalnya kalau enggak, ikut gabisa diclick
         */}
        <button type="button" onClick={handlePrevClick} className="pointer-events-auto">
          <AiOutlineArrowLeft size={35} />
        </button>
        <button type="button" onClick={handleNextClick} className="pointer-events-auto">
          <AiOutlineArrowRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
