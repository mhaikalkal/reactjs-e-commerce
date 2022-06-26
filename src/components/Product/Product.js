import React from "react";

const Product = () => {
  return (
    <section className="product mt-4">
      <div className="container flex justify-between gap-5 mx-auto">
        <div class="product-left border">Card</div>
        <div class="product-right">
          <div className="name-wrapper flex flex-col">
            <h1 className="product-name font-bold text-2xl">Nike Air Force 1 '07</h1>
            <span className="product-desc">Lifestyle</span>
          </div>

          {/* price */}
          <div className="price mt-3 flex">
            <span className="text-sm">Rp. 10000000</span>
          </div>
          {/* end price */}

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
              <button
                type="button"
                className="py-2 px-2 border border-red-600 hover:bg-red-600 hover:text-white text-red-600 text-sm focus:outline focus:outline-red-300 active:bg-red-800 active:text-white active:border-red-800 rounded-2xl"
              >
                Add to Wishlist
              </button>
            </div>
            {/* end button */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Product;
