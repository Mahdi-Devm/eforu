import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      imageUrl: "/images/bannermobile/1.jpg",
    },
    {
      imageUrl: "/images/bannermobile/2.jpg",
    },
    {
      imageUrl: "/images/bannermobile/3.jpg",
    },
    {
      imageUrl: "/images/bannermobile/4.jpg",
    },
    {
      imageUrl: "/images/bannermobile/5.jpg",
    },
  ];
  return NextResponse.json(users);
}
