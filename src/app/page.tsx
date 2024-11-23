'use server'

import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'

import { getAllProducts } from '@/services/api'

import { ProductsApiResponse } from '@/types/ApiType'

import Typography from '@/ui/typography/Typography'
import BaseButton from '@/ui/baseButton/BaseButton'

import s from './page.module.scss'

export default async function Home() {
  const res: ProductsApiResponse = await getAllProducts()
  const products = res.data.items

  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.container}>
          <div className={s.title_grid_panel}>
            <Typography tag="h2" className={s.title_grid_panel__title} data-testid="home-title">
              Popular Products
            </Typography>
            <BaseButton href="/products">Browse all products</BaseButton>
          </div>

          <ProductsGrid products={products} />
        </div>
      </main>
    </div>
  )
}
