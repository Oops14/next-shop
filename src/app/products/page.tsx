import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'

import { getAllProducts } from '@/services/api'

import PageTitle from '@/shared/pageTitle/PageTitle'

import { ProductsApiResponse } from '@/types/ApiType'

import s from '../page.module.scss'

const Shop = async () => {
  const res: ProductsApiResponse = await getAllProducts()
  const products = res.data.items

  return (
    <>
      <PageTitle>Shop page</PageTitle>
      <div className={s.container}>
        <div>
          <ProductsGrid products={products} />
        </div>
      </div>
    </>
  )
}

export default Shop
