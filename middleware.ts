import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 处理尾部斜杠重定向：/ja/ → /ja
  if (pathname.endsWith("/") && pathname !== "/") {
    const newUrl = new URL(request.url)
    newUrl.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(newUrl, 301)
  }

  // 让Next.js自然处理未知路由，返回404状态码
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，但排除：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
