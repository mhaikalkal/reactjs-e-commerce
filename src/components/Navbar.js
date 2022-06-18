import React from "react";

const Navbar = (props) => {
  return (
    <nav className="px-6 py-3 top-0 bg-white max-w-full shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="#">
              <img src={props.logo} alt="MH Logo" />
            </a>
          </div>

          <div className="nav-menu">
            <ul className="flex gap-4">
              <li>
                <div className="text-lg font-semibold">Men</div>
              </li>
              <li>
                <div className="text-lg font-semibold">Women</div>
              </li>
              <li>
                <div className="text-lg font-semibold">Kids</div>
              </li>
            </ul>
          </div>

          <div className="cart-menu">
            <ul className="flex gap-3">
              <li>
                <lord-icon src="https://cdn.lordicon.com/kkcllwsu.json" trigger="hover" style={{ width: "32px", height: "32px" }} colors="primary:#000000"></lord-icon>
              </li>
              <li>
                <lord-icon src="https://cdn.lordicon.com/aoggitwj.json" trigger="hover" style={{ width: "32px", height: "32px" }} colors="primary:#000000"></lord-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
