import React from "react";
import CardProduct from "../components/CardProduct";
import Product from "../data/Product";
import Pattern from "./../assets/img/pattern.png";

function MainProduct() {
  return (
    <section id="main-product" className="mt-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Product Terlaris</h1>
        <div className="flex items-center">
          {/* <div className="-z-10">
            <img src={Pattern} alt="" className="h-full rounded-lg min-w-max" />
          </div> */}
          <div className="flex items-start gap-3 overflow-x-scroll">
            {Product.map((prod) => {
              return <CardProduct key={prod.id} product={prod} />;
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <hr className="mt-8" />
      </div>
    </section>
  );
}

export default MainProduct;
