"use client";
import { useAppDispatch } from "@/Redux/hooks";
import { addToCart } from "@/Redux/slices/productSlice";
import type { Product } from "@/types";

const CartBtn = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  function handelClick() {
    dispatch(addToCart(product));
  }

  return (
    <button type="button" onClick={handelClick}>
      Add to cart
    </button>
  );
};

export default CartBtn;
