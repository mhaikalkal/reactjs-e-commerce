import React from "react";
import Adidas from "./../assets/img/Adidas.png";
import Converse from "./../assets/img/Converse.png";
import Nike from "./../assets/img/Nike.png";
import Vans from "./../assets/img/Vans.png";

const Brand = () => {
  return (
    <section id="brand" className="mt-4">
      <div className="container mx-auto border">
        <div class="flex justify-between items-center flex-wrap">
          <div className="brand-image w-64 border">
            <img src={Adidas} alt="Adidas" className="bg-cover w-full" />
          </div>
          <div className="brand-image w-64 border">
            <img src={Converse} alt="Converse" className="bg-cover w-full" />
          </div>
          <div className="brand-image w-64 border">
            <img src={Nike} alt="Nike" className="bg-cover w-full" />
          </div>
          <div className="brand-image w-64 border">
            <img src={Vans} alt="Vans" className="bg-cover w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
