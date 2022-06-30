// This is your backend

import { NextRequest } from "next/server"

export default function handler(req: NextRequest) {
  const authHeader = req.headers.get("authorization")

  const path = req.nextUrl.pathname.replace("/api/backend", "")

  if (authHeader === "backend-auth") {
    return new Response(`success from your backend to API ${path}`)
  }

  return new Response(JSON.stringify({ auth: authHeader, path }), {
    headers: { "Content-Type": "application/json" },
    status: 401,
  })
}

export const config = { runtime: "experimental-edge" }
