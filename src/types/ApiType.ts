import { ProductType } from './ProductType'

export type PaginationType = {
  offset: number
  limit: number
  total: number
}

export type ProductsApi = {
  data: {
    items: ProductType[]
    pagination: PaginationType
  }
  meta: Record<string, unknown>
  errors: (string | null)[]
}

export interface TokenApiResponse {
  data: {
    token: string
  }
  meta: Record<string, unknown>
  errors: (string | null)[]
}
