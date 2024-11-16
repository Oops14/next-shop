import { ProductType } from './ProductType'

export type PaginationType = {
  offset: number
  limit: number
  total: number
}

export interface BaseApiResponse<T> {
  data: T
  meta: Record<string, unknown>
  errors: (string | null)[]
}

export type BaseApiResponseResponse = BaseApiResponse<{
  items: ProductType[]
  pagination: PaginationType
}>

export type ProductsApiResponse = BaseApiResponse<{
  items: ProductType[]
  pagination: PaginationType
}>

export type TokenApiResponse = BaseApiResponse<{ token: string }>
