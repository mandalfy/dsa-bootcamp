import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { dbConnect } from "../lib/mongo";

export async function middleware(req: NextRequest) {
  await dbConnect();
  return NextResponse.next();
}
