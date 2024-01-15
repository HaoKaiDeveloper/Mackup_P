"use client";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductSliceInit, SearchParams, Product, CartItem } from "@/types";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (queryObj: SearchParams, thunkAPI) => {
    const { page, search, category, sort } = queryObj;
    let url = `/api/getProduct?page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

function countTotal(cart: CartItem[]) {
  return cart.reduce((acc: number, prev: CartItem) => {
    return (acc += prev.amount * prev.price);
  }, 0);
}

function setLocalCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getLocalCart() {
  return JSON.parse(localStorage.getItem("cart") as string) as CartItem[];
}

const initialState: ProductSliceInit = {
  products: [],
  cart: [],
  totalPages: 2,
  total: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initSettingCart: (state, action: PayloadAction<CartItem[]>) => {
      const localCart = action.payload;
      state.cart = localCart;
      state.total = countTotal(localCart);
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
      const productItem = action.payload;
      const localCart = getLocalCart();
      const sameItemIndex = localCart.findIndex(
        (item) => item._id === productItem._id
      );
      if (sameItemIndex >= 0) {
        const sameItem: CartItem = localCart[sameItemIndex];
        sameItem.amount++;
        localCart.splice(sameItemIndex, 1, sameItem);
      } else {
        localCart.push({ ...productItem, amount: 1 });
      }
      state.cart = localCart;
      state.total = countTotal(localCart);
      setLocalCart(localCart);
    },
    EditQty: (state, action: PayloadAction<{ id: string; act: string }>) => {
      const { id, act } = action.payload;
      const localCart = getLocalCart();
      const sameItemIndex = localCart.findIndex((item) => item._id === id);
      const sameItem = localCart[sameItemIndex];
      if (act === "plus") {
        sameItem.amount++;
        localCart.splice(sameItemIndex, 1, sameItem);
      } else if (act === "minus") {
        sameItem.amount--;
        sameItem.amount <= 0
          ? localCart.splice(sameItemIndex, 1)
          : localCart.splice(sameItemIndex, 1, sameItem);
      }
      state.cart = localCart;
      state.total = countTotal(localCart);
      setLocalCart(localCart);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
  },
});

export const { addToCart, initSettingCart, EditQty } = productSlice.actions;

export default productSlice.reducer;
