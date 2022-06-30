import { NextRequest } from "next/server"

export default function handler(req: NextRequest) {
  if (req.headers.get("authorization") === "app-auth") {
    req.headers.set("authorization", "backend-auth")
  }
  req.headers.delete("connection")
  const path = req.nextUrl.pathname.replace("/api", "/api/backend")
  return fetch(`http://localhost:3000/${path}`, {
    headers: req.headers,
    method: req.method,
    body: req.body,
  })
}

export const config = { runtime: "experimental-edge" }
