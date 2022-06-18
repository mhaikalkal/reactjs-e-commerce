import React from "react";
import { FaRegHeart } from "react-icons/fa";

function CardProduct(props) {
  const product = props.product;

  function rupiah_format(price) {
    let price_string = price.toString();
    let sisa = price_string.length % 3;
    let rupiah = price_string.substr(0, sisa);
    let ribuan = price_string.substr(sisa).match(/\d{3}/g);

    let separator;
    if (ribuan) {
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    return rupiah;
  }

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k+" : Math.sign(num) * Math.abs(num);
  }

  return (
    <div className="card bg-white rounded-lg border overflow-hidden border-slate-200 shadow-sm w-64">
      <div className="card-image mb-1 relative">
        <span className="absolute top-0 left-0 bg-slate-600 px-3 py-2 rounded-br-md text-white">{product.brand}</span>
        <span className="absolute top-0 right-0 mt-4 mr-4">
          <FaRegHeart />
        </span>
        <img src={product.thumbnail} alt="Product" className="bg-center/bg-cover w-full h-72" />
      </div>

      <div className="card-detail px-3 py-3">
        <p className="text-md">{product.name}</p>
        <p className="text-md font-semibold">Rp. {rupiah_format(product.price)}</p>

        <div className="flex rating items-center gap-1">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="text-sm text-gray-400">{product.rating}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-400 rounded-full"></span>
          <p className="text-sm text-gray-400">Terjual {kFormatter(product.sold)}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
