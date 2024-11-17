'use server'

import { cookies } from 'next/headers'

import { env } from 'process'

const BASE_URL = env.VITE_API_URL

export const login = async (phone: string, code: string) => {
  const res = await fetch(`${BASE_URL}/customers/confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code: code, phone: phone }),
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return await res.json()
}

export const isAuthenticated = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')
  const value = !!token

  return { value }
}

export const register = async (phone: string) => {
  const res = await fetch(`${BASE_URL}/customers/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone: phone }),
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return await res.json()
}
