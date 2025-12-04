import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { calcRegion } from "./lib/CalcRegion";
import { geolocation } from "@vercel/functions";

export async function middleware(req: NextRequest) {
  const { country } = geolocation(req) || "UNKNOWN";
  const region = calcRegion(country);
  let lang = "en";
  // Save the country in a cookie for frontend usage
  const res = NextResponse.next();
  res.cookies.set("user-region", region, {
    path: "/",
  });
  if (region !== "global") lang = "ar";
  res.cookies.set("user-lang", lang, {
    path: "/",
  });

  return res;
}

// Optional: match all routes
export const config = {
  matcher: "/:path*",
};
