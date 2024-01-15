"use client";
import type { CartItem } from "@/types";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { useAppDispatch } from "@/Redux/hooks";
import { EditQty } from "@/Redux/slices/productSlice";

import classes from "./MyCart.module.css";

interface PropsType {
  cartItems: CartItem[];
  total: number;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyCart = ({ cartItems, total, setShowCart }: PropsType) => {
  const dispatch = useAppDispatch();

  function editQty(id: string, act: string) {
    dispatch(EditQty({ id, act }));
  }

  return (
    <main className={classes.main}>
      <div className={classes.cart}>
        <button
          type="button"
          onClick={() => setShowCart(false)}
          className={classes.closeBtn}
        >
          <AiOutlineClose />
        </button>
        <h1>Cart</h1>
        <div className={classes.list}>
          {cartItems.map((item) => {
            return (
              <div className={classes.item} key={item._id}>
                <div className={classes.item_img}>
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill={true}
                    sizes="20vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={classes.item_info}>
                  <p>{item.name}</p>
                  <p>${item.price}/unit</p>
                </div>
                <div className={classes.item_amount}>
                  <button
                    type="button"
                    onClick={() => editQty(item._id, "minus")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p>{item.amount}</p>
                  <button
                    type="button"
                    onClick={() => editQty(item._id, "plus")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className={classes.total}>Total : ${total}</p>
      </div>
    </main>
  );
};

export default MyCart;
