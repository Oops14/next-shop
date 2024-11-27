export interface IProductsServices {
  getAllProducts(url: string): Promise<any>
  getProduct(id: string): Promise<any>
}
