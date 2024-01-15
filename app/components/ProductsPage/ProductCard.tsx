"use client";

import Image from "next/image";
import Link from "next/link";
import { BsBagPlus } from "react-icons/bs";
import type { Product } from "@/types";
import { useAppDispatch } from "@/Redux/hooks";
import { addToCart } from "@/Redux/slices/productSlice";

import classes from "./ProductCard.module.css";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  const { images, name, price, _id, tag } = product;

  return (
    <div className={classes.main}>
      <div className={classes.img}>
        <Image src={images[0]} alt={name} fill={true} sizes="100vw" />
      </div>

      <div className={classes.info}>
        <div className={classes.price}>
          <h1>{name}</h1>
          <p>$ {price}</p>
        </div>
        <Link href={`products/${_id}`} className={classes.detail}>
          Detail
        </Link>

        <p className={classes.tag}>{tag}</p>

        <button
          className={classes.cartBtn}
          type="button"
          onClick={handleAddToCart}
        >
          <BsBagPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
