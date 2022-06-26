import React from "react";
import Kids from "../../assets/img/categories/kids.jpg";
import Lifestyle from "../../assets/img/categories/lifestyle.jpg";
import Sports from "../../assets/img/categories/sports.jpg";

const Categories = () => {
  return (
    <section id="category" className="px-6 py-3 top-0 mt-4 max-w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <div className="card-category group" data-aos="fade-right">
            <div className="card-body">
              <img src={Lifestyle} alt="" className="card-category-img" />
              <div className="card-name-container">
                <span className="card-name">Lifestyle</span>
              </div>
            </div>
          </div>

          <div className="card-category group" data-aos="fade-up">
            <div className="card-body">
              <img src={Sports} alt="" className="card-category-img" />
              <div className="card-name-container">
                <span className="card-name">Sports</span>
              </div>
            </div>
          </div>

          <div className="card-category group" data-aos="fade-left">
            <div className="card-body">
              <img src={Kids} alt="" className="card-category-img" />
              <div className="card-name-container">
                <span className="card-name">Kids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
