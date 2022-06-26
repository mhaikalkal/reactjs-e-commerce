import React from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-32.png";

// jumlah cart item,dari cartcontext
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Navbar = () => {
  // items merupakan nama state yg dikirim via cartcontext
  const { items } = useContext(CartContext);
  console.log(items);

  return (
    <nav className="sticky px-6 py-3 top-0 bg-white max-w-full shadow-lg z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="MH Logo" />
            </Link>
          </div>

          <Searchbar />

          <div className="cart-menu">
            <ul className="flex gap-3">
              <li>
                <Link to="/">
                  <lord-icon src="https://cdn.lordicon.com/kkcllwsu.json" trigger="hover" style={{ width: "32px", height: "32px" }} colors="primary:#000000"></lord-icon>
                </Link>
              </li>
              <li className="relative">
                <Link to="/cart">
                  <lord-icon src="https://cdn.lordicon.com/aoggitwj.json" trigger="hover" style={{ width: "32px", height: "32px" }} colors="primary:#000000">
                    {items.length > 0 ? (
                      <div className="absolute top-0 right-0 rounded-full bg-red-600 h-3 w-3 flex">
                        <div className="m-auto text-[8px] text-white">{items}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </lord-icon>
                </Link>
              </li>
              <li className="border-l-2"></li>
              <li>
                <Link to="/">
                  <lord-icon src="https://cdn.lordicon.com/dklbhvrt.json" trigger="hover" style={{ width: "32px", height: "32px" }} colors="primary:#000000"></lord-icon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
