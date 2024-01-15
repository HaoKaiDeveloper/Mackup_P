import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import Product from "../modle";

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

export async function GET(
  req: NextRequest,
  { params }: { params: { pid: string } }
) {
  try {
    await connectToDB();
    const product = await Product.findById(params.pid);

    return NextResponse.json({ data: product });
  } catch (err) {}
}
