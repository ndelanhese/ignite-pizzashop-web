import { env } from '@env';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const BASE_URL = env.NEXT_PUBLIC_APP_URL;
  const PORT = env.NEXT_PUBLIC_APP_PORT;

  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`${BASE_URL}:${PORT}/dashboard`, request.url),
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/dashboard/:path*', '/sign-in/:path*'],
};
