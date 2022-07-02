import React from "react";
import Card from "./Card";
import FormProduct from "./FormProduct/FormProduct";

const testData = [
  {
    id: 4,
    brand: "Nike",
    style: "Air Max",
    name: "Nike Air Max 90",
    slug: "nike-air-max-90",
    thumbnail: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_631,c_limit/87c8a5ba-e14e-4fa2-99c1-92bf822e875f/air-max-90-mens-shoes-D6ttcZ.png",
    image: [
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_631,c_limit/87c8a5ba-e14e-4fa2-99c1-92bf822e875f/air-max-90-mens-shoes-D6ttcZ.png",
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_631,c_limit/87c8a5ba-e14e-4fa2-99c1-92bf822e875f/air-max-90-mens-shoes-D6ttcZ.png",
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_631,c_limit/87c8a5ba-e14e-4fa2-99c1-92bf822e875f/air-max-90-mens-shoes-D6ttcZ.png",
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_631,c_limit/87c8a5ba-e14e-4fa2-99c1-92bf822e875f/air-max-90-mens-shoes-D6ttcZ.png",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum ipsum dolores tenetur voluptatum recusandae ipsa voluptatem dolor quos magnam alias vitae dolore sequi aspernatur. Illum error dolores minus omnis ut distinctio. Ut beatae quis perspiciatis quae voluptas debitis doloremque placeat aperiam ab, quibusdam accusamus illo corrupti incidunt architecto recusandae in animi eius corporis dolores provident? Consectetur consequuntur, quos veniam ex accusantium alias aperiam accusamus rem aut sunt, nemo quas similique quae eaque voluptate maxime voluptatum rerum numquam. Pariatur cumque illum neque illo consequuntur temporibus accusantium corrupti dolore! Porro harum blanditiis quia maiores libero quasi optio esse dolorem ut saepe.",
    category: ["Lifestyle", "Men"],
    variant: [
      {
        color: "green",
        available: [
          { size: 36, stock: 0 },
          { size: 37, stock: 23 },
          { size: 38, stock: 199 },
          { size: 39, stock: 406 },
          { size: 40, stock: 392 },
          { size: 41, stock: 57 },
          { size: 42, stock: 28 },
          { size: 43, stock: 0 },
          { size: 44, stock: 11 },
        ],
      },
      {
        color: "red",
        available: [
          { size: 37, stock: 23 },
          { size: 38, stock: 199 },
          { size: 39, stock: 0 },
          { size: 40, stock: 392 },
          { size: 41, stock: 57 },
          { size: 42, stock: 28 },
          { size: 43, stock: 0 },
          { size: 44, stock: 11 },
        ],
      },
    ],
    price: 1600000,
    sold: 88,
    rating: 4.3,
  },
];

const Product = () => {
  return (
    <section className="product mt-4">
      <div className="container flex justify-center gap-5 mx-auto">
        <div className="product-left border">Card</div>
        <div className="product-right">
          <div className="name-wrapper flex flex-col">
            <h1 className="product-name font-bold text-2xl">Nike Air Force 1 '07</h1>
            <span className="product-desc">Lifestyle</span>
          </div>

          {/* price */}
          <div className="price mt-3 flex">
            <span className="text-sm">Rp. 10000000</span>
          </div>
          {/* end price */}

          <FormProduct />
        </div>
      </div>
    </section>
  );
};

const ProductTest = () => {
  const product = testData;
  return (
    <section className="product mt-8">
      {/* start container flex */}
      <div className="container mx-auto flex flex-col-reverse justify-center gap-8 md:justify-between md:flex-row ">
        <div className="product-left grid grid-cols-1 gap-2 flex-1 lg:grid-cols-2 max-w-full">
          <Card img={product[0].image[0]} name={product[0].name} />
          <Card img={product[0].image[0]} name={product[0].name} />
          <Card img={product[0].image[0]} name={product[0].name} />
        </div>

        <div className="product-right max-w-full mx-auto flex-1">
          {product.map((p) => {
            return (
              <React.Fragment key={p.id}>
                <div className="product-desc">
                  <h1 className="product-name font-bold text-2xl">{p.name}</h1>

                  <p className="product-desc">{p.category.join(", ")}</p>

                  <span className="product-price text-sm text-slate-500">Rp. {p.price}</span>

                  <div className="description mt-4 text-sm">
                    <span className="font-bold self-center">Description :</span>
                    <p className="text-justify">{p.description}</p>
                  </div>
                </div>

                <FormProduct product={product} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* end container flex */}
    </section>
  );
};

export default ProductTest;
