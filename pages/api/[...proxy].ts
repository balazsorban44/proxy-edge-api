import { NextRequest } from "next/server"

export default function handler(req: NextRequest) {
  if (req.headers.get("authorization") === "app-auth") {
    req.headers.set("authorization", "backend-auth")
  }

  const path = req.nextUrl.pathname.replace("/api", "/api/backend")
  return fetch(`http://localhost:3000/${path}`, req)
}

export const config = { runtime: "experimental-edge" }
