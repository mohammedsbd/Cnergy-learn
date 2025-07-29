// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  // Example: Block access to a path
  if (request.nextUrl.pathname === '/blocked') {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return NextResponse.next();
}
