import React, { useState, useEffect, useRef } from "react";
import hero1 from "../../../assets/img/hero/1.jpg";
import hero2 from "../../../assets/img/hero/2.jpg";
import hero3 from "../../../assets/img/hero/3.jpg";
import "./carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
    <div className="relative h-[550px]" ref={carouselRef}>
      <div className="carousel bg-center h-full bg-no-repeat" style={{ backgroundImage: `url('${carouselImage[heroIndex]}')` }}></div>

      <div className="absolute w-full flex top-1/2 -translate-y-1/2 px-3 py-3 justify-between items-center">
        <button type="button" onClick={handlePrevClick}>
          <AiOutlineArrowLeft size={35} />
        </button>
        <button type="button" onClick={handleNextClick}>
          <AiOutlineArrowRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
