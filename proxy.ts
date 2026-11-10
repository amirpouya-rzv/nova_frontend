
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("logintoken")?.value;

  const pathname = request.nextUrl.pathname;

  // Protect cart route
  if (pathname.startsWith("/products/:path*") && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  

  // Redirect logged-in users from login page
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/login"],
};
