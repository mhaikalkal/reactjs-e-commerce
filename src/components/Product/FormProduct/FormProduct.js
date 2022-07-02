import React from "react";
import ColorPicker from "./Color";
import SizePicker from "./Size";
import { useState } from "react";

import CartContext from "../../../context/CartContext";
import { useContext } from "react";

const FormProduct = () => {
  return (
    <form className="">
      {/* color pick */}
      <div className="color mt-4">
        <span className="font-bold self-center text-sm">Colors : </span>
        <div className="grid grid-cols-5 gap-2">
          <label>
            <input class="sr-only peer" name="color" type="radio" value="green" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center border bg-green-600 peer-checked:outline-dashed peer-checked:outline-slate-500 peer-checked:outline-offset-0 hover:cursor-pointer hover:outline-offset-0 hover:outline-dashed hover:outline-slate-400"></div>
          </label>
          <label>
            <input class="sr-only peer" name="color" type="radio" value="red" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center border bg-red-600 peer-checked:outline-dashed peer-checked:outline-slate-500 peer-checked:outline-offset-0 hover:cursor-pointer hover:outline-offset-0 hover:outline-dashed hover:outline-slate-400"></div>
          </label>
          <label>
            <input class="sr-only peer" name="color" type="radio" value="white" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center border bg-slate-100 peer-checked:outline-dashed peer-checked:outline-slate-500 peer-checked:outline-offset-0 hover:cursor-pointer hover:outline-offset-0 hover:outline-dashed hover:outline-slate-400"></div>
          </label>
          <label>
            <input class="sr-only peer" name="color" type="radio" value="blue" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center border bg-indigo-600 peer-checked:outline-dashed peer-checked:outline-slate-500 peer-checked:outline-offset-0 hover:cursor-pointer hover:outline-offset-0 hover:outline-dashed hover:outline-slate-400"></div>
          </label>
          <label>
            <input class="sr-only peer" name="color" type="radio" value="grey" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center border bg-slate-700 peer-checked:outline-dashed peer-checked:outline-slate-500 peer-checked:outline-offset-0 hover:cursor-pointer hover:outline-offset-0 hover:outline-dashed hover:outline-slate-400"></div>
          </label>
          <label>
            <input class="sr-only peer" name="color" type="radio" value="blue" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center border bg-slate-900 peer-checked:outline-dashed peer-checked:outline-slate-500 peer-checked:outline-offset-0 hover:cursor-pointer hover:outline-offset-0 hover:outline-dashed hover:outline-slate-400"></div>
          </label>
        </div>
      </div>
      {/* end color pick */}

      {/* size pick */}
      <div className="size mt-4">
        <span className="font-bold self-center text-sm">Size : </span>
        <div className="grid grid-cols-5 gap-2">
          <label>
            <input class="sr-only peer" name="size" type="radio" value="35" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:cursor-pointer border hover:border hover:border-slate-700">
              35
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="36" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:cursor-pointer border hover:border hover:border-slate-700">
              36
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="37" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:cursor-pointer border hover:border hover:border-slate-700">
              37
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="38" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:cursor-pointer border hover:border hover:border-slate-700">
              38
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="39" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:cursor-pointer border hover:border hover:border-slate-700">
              39
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="40" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:cursor-pointer border hover:border hover:border-slate-700">
              40
            </div>
          </label>
        </div>
      </div>
      {/* end size pick */}

      {/* Amount */}
      <div className="amount mt-4">
        <span className="font-bold self-center text-sm">Amount : </span>

        <div className="flex">
          <button type="button" className="px-2 bg-slate-300 hover:bg-slate-500 hover:text-white focus:outline-offsset-1 focus:outline-slate-400 active:bg-slate-900 active:text-white">
            -
          </button>
          <input type="text" name="" id="" className="border px-2 focus:outline text-xs" placeholder="Amount" />
          <button type="button" className="px-2 bg-slate-300 hover:bg-slate-500 hover:text-white focus:outline-offsset-1 focus:outline-slate-400 active:bg-slate-900 active:text-white">
            +
          </button>
        </div>
      </div>
      {/* end amount */}

      {/* button */}
      <div className="button flex flex-col gap-2 mt-5">
        <button type="button" className="py-2 px-2 border bg-slate-900 text-white text-sm hover:bg-slate-500 focus:outline focus:outline-slate-400 rounded-2xl">
          Add to Bag
        </button>
        <button type="button" className="py-2 px-2 border border-red-600 hover:bg-red-600 hover:text-white text-red-600 text-sm focus:outline focus:outline-red-300 active:bg-red-800 active:text-white active:border-red-800 rounded-2xl">
          Add to Wishlist
        </button>
      </div>
      {/* end button */}
    </form>
  );
};

const FormProductTest = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const [isError, setIsError] = useState(false);

  const [color, setColor] = useState();
  const [size, setSize] = useState();

  const [selectedProduct, setSelectedProduct] = useState();

  // onChange for several item = id, price, name
  // const handleSeveralChanges = (e) => {
  //   const target = e.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   setSelectedProduct({ [name]: value });
  // };

  // color
  const handleColorChange = (e) => {
    setColor(e.target.value);
    console.log(e.target.value);
  };

  // size
  const handleSizeChange = (e) => {
    setSize(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color && size) {
      addToCart({ color: color, size: size });
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // amount of product to purchase
  // const handleDecreaseAmountChange = () => {
  //   if (amount <= 0) {
  //     setAmount(0);
  //   } else {
  //     setAmount(amount - 1);
  //   }
  // };

  // const handleIncreaseAmountChange = () => {
  //   setAmount(amount + 1);
  // };

  // const handleAmountType = (e) => {
  //   let value = e.target.value;
  //   if (!value) {
  //     value = 0;
  //   }

  //   if (value < 0) {
  //     value = 0;
  //   }

  //   setAmount(value);
  // };

  // const handleAmountChange = (e) => {
  //   setAmount(e.target.value);
  // };
  // end amount

  return (
    <>
      {isError && (
        <div className="p-3 rounded-sm bg-red-200 border border-red-500 flex justify-between mt-3">
          <span className="text-red-500 font-semibold">You Should Pick the color and the size</span>
          <span className="hover:cursor-pointer" onClick={() => setIsError(false)}>
            X
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {product.map((p) => {
          return (
            <React.Fragment key={p.id}>
              <input type="hidden" name="id" value={p.id} />
              <input type="hidden" name="name" value={p.name} />
              <input type="hidden" name="price" value={p.price} />

              {/* color picker start */}
              <div className="color mt-4">
                <span className="font-bold text-sm">Colors : </span>
                <div className="flex flex-wrap gap-2">
                  {p.variant.map((variant) => {
                    return <ColorPicker key={variant.color} color={variant.color} handleColorChange={handleColorChange} />;
                  })}
                </div>
              </div>
              {/* color picker end */}

              {/* if color picked then shows the size picker comp */}
              {color ? (
                <>
                  {/* size picker start */}
                  <div className="size mt-4">
                    <span className="font-bold text-sm">Size : </span>
                    <div className="flex flex-wrap gap-2">
                      {/*  */}

                      {p.variant.map((variant) => {
                        // jika variant.color sama dengan picked color
                        if (variant.color === color) {
                          return variant.available.map((available) => {
                            // jika stock-nya kosong, maka disabled si radio button-nya
                            if (available.stock <= 0) {
                              return <SizePicker key={available.size} size={available.size} handleSizeChange={handleSizeChange} disabled={"disabled"} />;
                            } else {
                              return <SizePicker key={available.size} size={available.size} handleSizeChange={handleSizeChange} />;
                            }
                          });
                        }
                      })}

                      {/*  */}
                    </div>
                  </div>
                  {/* size pikcer end */}
                </>
              ) : (
                ""
              )}

              {/* Amount */}
              {/* <div className="amount mt-4 flex flex-col">
              <span className="font-bold text-sm">Amount : </span>

              <div className="flex">
                <button type="button" className="px-2 bg-slate-300 hover:bg-slate-500 hover:text-white focus:outline-offset-1 focus:outline-slate-400 active:bg-slate-900 active:text-white" onClick={handleDecreaseAmountChange}>
                  -
                </button>
                <input type="number" className="amount border px-2 focus:outline text-xs w-full" placeholder="Amount" value={amount} onChange={handleAmountChange} onKeyUp={handleAmountType} />
                <button type="button" className="px-2 bg-slate-300 hover:bg-slate-500 hover:text-white focus:outline-offset-1 focus:outline-slate-400 active:bg-slate-900 active:text-white" onClick={handleIncreaseAmountChange}>
                  +
                </button>
              </div>
            </div> */}
              {/* end amount */}

              {/* button */}
              <div className="button flex flex-col gap-2 mt-5">
                <button type="submit" className="py-2 px-2 border bg-slate-900 text-white text-sm hover:bg-slate-500 focus:outline focus:outline-slate-400 rounded-2xl">
                  Add to Bag
                </button>
                <button
                  type="button"
                  className="py-2 px-2 border border-red-600 hover:bg-red-600 hover:text-white text-red-600 text-sm focus:outline focus:outline-red-300 active:bg-red-800 active:text-white active:border-red-800 rounded-2xl"
                >
                  Add to Wishlist
                </button>
              </div>
              {/* end button */}
            </React.Fragment>
          );
        })}
      </form>
    </>
  );
};

export default FormProductTest;
