import React from "react";
import Adidas from "./../assets/img/Adidas.png";
import Converse from "./../assets/img/Converse.png";
import Nike from "./../assets/img/Nike.png";
import Vans from "./../assets/img/Vans.png";

import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <section id="brand" className="mt-4">
      <div className="container mx-auto border">
        <div className="flex justify-center items-center gap-16 flex-wrap">
          <Link to="/adidas" className="brand-image w-64 self-center">
            <img src={Adidas} alt="Adidas" className="bg-cover w-full" />
          </Link>
          <Link to="/converse" className="brand-image w-64 self-center">
            <img src={Converse} alt="Converse" className="bg-cover w-full" />
          </Link>
          <Link to="/nike" className="brand-image w-64 self-center">
            <img src={Nike} alt="Nike" className="bg-cover w-full" />
          </Link>
          <Link to="/vans" className="brand-image w-64 self-center">
            <img src={Vans} alt="Vans" className="bg-cover w-full" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brand;
