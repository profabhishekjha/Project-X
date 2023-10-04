import { NextResponse } from "next/server";

export const POST = async (req) => {
  if (req.method === "POST") {
    const body = await req.json();

    return new NextResponse(JSON.stringify({ status: 200 }));
  } else {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
