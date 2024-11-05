import { ProductType } from './ProductType'

export type PaginationType = {
  offset: number
  limit: number
  total: number
}

export type ApiResponse = {
  data: {
    items: ProductType[]
    pagination: PaginationType
  }
  meta: Record<string, unknown>
  errors: (string | null)[]
}