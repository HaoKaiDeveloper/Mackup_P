import React from "react";
import type { Product } from "@/types";
import CartBtn from "@/app/components/PidPage/CartBtn";
import ImgSwiper from "@/app/components/Swiper/ImgSwiper";
import ProductSwiper from "@/app/components/Swiper/ProductSwiper";
import classes from "./page.module.css";

import { getProduct, getAllProducts } from "@/lib/Product";

const page = async ({ params }: { params: { pid: string } }) => {
  const [data, { products }] = await Promise.all([
    getProduct(params.pid),
    getAllProducts(),
  ]);

  return (
    <div>
      <main className={classes.main}>
        <ImgSwiper images={data.images} />
        <div className={classes.info}>
          <h1>{data.name}</h1>
          <p>$ {data.price}</p>
          <span>{data.tag}</span>

          <CartBtn product={data} />
        </div>
        <article>{data.des}</article>
      </main>
      <ProductSwiper products={products} />
    </div>
  );
};

export async function generateStaticParams() {
  const data: { products: Product[] } = await getAllProducts();
  return data.products.map((item) => {
    return { pid: item._id };
  });
}

export default page;
