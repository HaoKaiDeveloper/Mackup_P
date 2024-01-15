"use client";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

import { initSettingCart } from "@/Redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import type { CartItem } from "@/types";

import MyCart from "./MyCart";
import MemberBtn from "./MemberBtn";
import classes from "./Navbar.module.css";

function initCart() {
  let cart: CartItem[];
  let storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart) as CartItem[];
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
    cart = [];
  }
  return cart;
}

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { cart, total } = useAppSelector((state) => state.product);
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    dispatch(initSettingCart(initCart()));
  }, [dispatch]);

  return (
    <>
      <div className={classes.main}>
        <Link href="/">Glamora</Link>
        <Link href="/products">Products</Link>
        <MemberBtn />
        <button
          type="button"
          className={classes.cart_btn}
          onClick={() => setShowCart(true)}
          data-itemsnum={cart.length}
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
      {showCart && (
        <MyCart setShowCart={setShowCart} cartItems={cart} total={total} />
      )}
    </>
  );
};

export default Navbar;
