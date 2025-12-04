import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { calcRegion } from "./lib/CalcRegion";

export async function proxy(req: NextRequest) {
  const country = req.geo?.country || "UNKNOWN";
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
