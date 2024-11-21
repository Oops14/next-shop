'use server'

import { env } from 'process'

import { BaseApiResponse } from '@/types/ApiType'
import { ProductType } from '@/types/ProductType'

import { ProductsSetvices } from './ProductsServices'

const BASE_URL = env.VITE_API_URL || 'http://localhost:8000/api/v1'

export const getAllProducts = async () => {
  const productService = new ProductsSetvices(BASE_URL, { next: { revalidate: 0 } } as NextFetchRequestConfig)
  const data = productService.getAllProducts('products')

  return data
}

export const getProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, { next: { revalidate: 0 } })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data: BaseApiResponse<ProductType> = await res.json()

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
