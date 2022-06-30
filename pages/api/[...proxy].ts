import { NextRequest } from "next/server"

export default function handler(req: NextRequest) {
  if (req.headers.get("authorization") === "app-auth") {
    req.headers.set("authorization", "backend-auth")
  }
  req.headers.delete("connection")
  req.nextUrl.pathname = req.nextUrl.pathname.replace("/api", "/api/backend")
  return fetch(req.nextUrl, {
    headers: req.headers,
    method: req.method,
    body: req.body,
  })
}

export const config = { runtime: "experimental-edge" }
