import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "./modle";
import type { SearchParams } from "@/types";

let isConnected: boolean = false;

const connectToDB = async () => {
  if (isConnected) {
    console.log("mongodb is connected");
    return;
  }
  const url = process.env.MONGO_URL as string;

  try {
    await mongoose.connect(url);

    isConnected = true;

    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

export const GET = async function (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const { page, search, category, sort }: SearchParams =
    Object.fromEntries(searchParams);

  try {
    await connectToDB();
    const queryObj: SearchParams = {};
    let products = [];

    if (category && category.length > 0) {
      queryObj.category = category;
    }

    if (search && search.length > 0) {
      const regex = new RegExp(search, "i");
      queryObj.name = regex as any;
    }

    products = await Product.find(queryObj);

    if (sort) {
      if (sort === "LowToHigh") {
        products = await Product.find(queryObj).sort({ price: 1 });
      } else if (sort === "HighToLow") {
        products = await Product.find(queryObj).sort({ price: -1 });
      }
    }
    const itemNum = 6;
    const totalPages = Math.ceil(products.length / itemNum);

    products = products.slice(0, itemNum * Number(page));

    return NextResponse.json(
      { totalPages, products },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { msg: "Filled to fetch products" },
      {
        status: 200,
      }
    );
  }
};
