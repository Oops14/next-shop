'use server'

import { env } from 'process'

const BASE_URL = env.VITE_API_URL

export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`, { next: { revalidate: 0 } })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return await res.json()
}

export const getProductById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, { next: { revalidate: 0 } })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return data
}

export const submitReview = async (productId: number, reviewData: { rating: number; text: string }) => {
  const res = await fetch(`${BASE_URL}/products/${productId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
  })

  if (!res.ok) {
    const errorData = await res.json()
    console.error('Server response:', errorData)
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return await res.json()
}
