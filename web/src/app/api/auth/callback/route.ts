import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // instantiate a URL to be able to get the request params from the URL
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const redirectTo = request.cookies.get("redirectTo")?.value;

  const registerResponse = await api.post("/register", {
    code,
  });

  const { token } = registerResponse.data;

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

  const redirectURL = redirectTo ?? new URL("/", request.url);

  // redirect to the home page with the token set as a cookie to be visible all around the application
  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  });
}
