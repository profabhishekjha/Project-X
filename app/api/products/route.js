import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/products";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
  await mongooseConnect();
  if (req.method === "POST") {
    const { title, description, price } = data;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    return new NextResponse(JSON.stringify(productDoc, { status: 200 }));
  } else {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
