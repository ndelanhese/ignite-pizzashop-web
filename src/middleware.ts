import { env } from '@env';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const baseURL = env.NEXT_PUBLIC_APP_URL;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`${baseURL}/dashboard`, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/dashboard/:path*', '/sign-in/:path*'],
};
