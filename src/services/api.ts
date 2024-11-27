'use server'

import { env } from 'process'

import { ProductsSetvices } from './ProductsServices'

const BASE_URL = env.VITE_API_URL || 'http://localhost:8000/api/v1'

/**
 * Fetches all products.
 *
 * @returns {Promise<any>} - A promise that resolves to the list of all products.
 * @throws {Error} - Throws an error if the HTTP request fails.
 */
export const getAllProducts = async () => {
  const productService = new ProductsSetvices(BASE_URL, { next: { revalidate: 0 } } as NextFetchRequestConfig)
  const data = productService.getAllProducts('products')

  return data
}

/**
 * Fetches a product by its ID.
 *
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<any>} - A promise that resolves to the product data.
 * @throws {Error} - Throws an error if the HTTP request fails.
 */
export const getProductById = async (id: string) => {
  const productService = new ProductsSetvices(`${BASE_URL}/products`, {
    next: { revalidate: 0 },
  } as NextFetchRequestConfig)
  const data = productService.getProduct(id)

  return data
}

/**
 * Submits a review for a product.
 *
 * @param {number} productId - The ID of the product to review.
 * @param {Object} reviewData - The review data.
 * @param {number} reviewData.rating - The rating of the product.
 * @param {string} reviewData.text - The review text.
 * @returns {Promise<any>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if the HTTP request fails.
 */
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
