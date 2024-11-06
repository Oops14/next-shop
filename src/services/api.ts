'use server'

const BASE_URL = 'http://localhost:8000/api/v1'

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

  return await res.json()
}

export const submitReview = async (productId: string, reviewData: { rating: number; review: string }) => {
  const res = await fetch(`http://localhost:8000/api/v1/products/${productId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return await res.json()
}
