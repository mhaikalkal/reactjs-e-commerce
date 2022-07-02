import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="hidden sm:block relative">
      <span className="absolute right-0 items-center">
        <button className="w-6 h-6 rounded-full bg-transparent hover:bg-slate-300 my-1 -translate-x-2 flex">
          <FaSearch className="m-auto" />
        </button>
      </span>

      <input type="text" name="search" id="search" className="rounded-full px-3 py-1 bg-slate-200 placeholder:text-sm focus:outline hover:bg-slate-300" placeholder="Search" autoComplete="off" />
    </div>
  );
};

export default Searchbar;
