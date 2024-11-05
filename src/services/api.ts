'use server'

const BASE_URL = 'http://localhost:8000/api/v1'

export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`, { next: { revalidate: 0 } })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return await res.json()
}
