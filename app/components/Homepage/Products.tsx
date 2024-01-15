import React from "react";
import type { Product } from "@/types/index";
import ProductSwiper from "../Swiper/ProductSwiper";

import classes from "./Products.module.css";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className={classes.main}>
      <h1>Discover More Products</h1>
      <ProductSwiper products={products} />
    </div>
  );
};

export default Products;
