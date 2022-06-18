import React from "react";
import { FaSearch } from "react-icons/fa";
import Category from "../data/Category";

const SearchSection = () => {
  return (
    <section id="search-section" className="mt-4">
      <div className="container mx-auto bg-white border border-slate-300 px-6 py-6 rounded-md shadow-md">
        <div className="flex justify-start items-start gap-3">
          <div className="search-bar w-1/2">
            <h2 className="font-bold text-xl">Cari Produk Impianmu.</h2>

            <div className="relative border border-slate-300 rounded-lg px-3 py-3 mt-2">
              <span className="absolute right-0 items-center">
                <button className="w-6 h-6 rounded-full bg-transparent hover:bg-slate-300 my-1 -translate-x-4 flex">
                  <FaSearch className="m-auto" />
                </button>
              </span>

              <input type="text" name="search" id="search" className="w-full rounded-full px-3 py-1 bg-slate-200 placeholder:text-sm focus:outline hover:bg-slate-300" placeholder="Search" autoComplete="off" />

              <div className="flex justify-start items-start gap-3 mt-[3px] text-center">
                <span className="text-xs text-slate-500">Air Force</span>
                <span className="text-xs text-slate-500">Sports</span>
                <span className="text-xs text-slate-500">Yeezy</span>
                <span className="text-xs text-slate-500">Flat Shoes</span>
              </div>
            </div>
          </div>

          <div className="category w-1/2">
            <h2 className="font-bold text-xl">Kategori</h2>
            <div className="flex justify-start items-center gap-2 overflow-hidden hover:overflow-x-scroll mt-2">
              {Category.map((c) => {
                return (
                  <div className="px-3 py-2 shadow-md rounded-md border border-slate-300 min-w-max mb-4" key={c.id}>
                    {c.category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <hr className="mt-8" />
      </div>
    </section>
  );
};

export default SearchSection;
