"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { getProducts } from "@/Redux/slices/productSlice";

import type { SearchParams } from "@/types";
import Hero from "../components/ProductsPage/Hero";
import SearchBar from "../components/ProductsPage/SearchBar";
import ProductCard from "../components/ProductsPage/ProductCard";

import classes from "./page.module.css";
const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { products, totalPages } = useAppSelector((state) => state.product);

  const [queryObj, setQueryObj] = useState<SearchParams>({
    page: 1,
    search: "",
    category: "",
    sort: "",
  });

  function nextPage() {
    setQueryObj((prev) => {
      return { ...prev, page: 2 };
    });
  }

  useEffect(() => {
    dispatch(getProducts(queryObj));
  }, [queryObj, dispatch]);

  return (
    <div className={classes.main}>
      <Hero />
      <SearchBar setQueryObj={setQueryObj} />
      <div className={classes.products}>
        <div className={classes.cards}>
          {products.map((p) => {
            return <ProductCard product={p} key={p._id} />;
          })}
        </div>

        {queryObj.page && totalPages > queryObj.page && (
          <button className={classes.pageBtn} onClick={nextPage}>
            All Product ...
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
