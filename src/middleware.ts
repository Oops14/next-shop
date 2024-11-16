'use server'

import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// import { decrypt } from '@/services/session'

const protectedRoutes = ['/', '/products', '/products/[id]', '/products/[id]/reviews', '/cart']
const publicRoutes = ['/login']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const cook = await cookies()

  const cookie = cook.get('session')?.value

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}
