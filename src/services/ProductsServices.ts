import { IProductsServices } from './IProductsServices'

export class ProductsSetvices implements IProductsServices {
  private baseUrl: string
  private config?: NextFetchRequestConfig

  constructor(baseUrl: string, config?: NextFetchRequestConfig) {
    this.baseUrl = baseUrl
    this.config = config
  }

  async baseFetch(endpoint: string, method: string = 'GET', data?: any) {
    try {
      const url = `${this.baseUrl}/${endpoint}`

      const options: RequestInit = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        next: this.config,
        body: data ? JSON.stringify(data) : undefined,
      }

      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      return await res.json()
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      } else {
        throw new Error('An unknown error occurred')
      }
    }
  }

  public getAllProducts(url: string) {
    return this.baseFetch(url)
  }
}
