'use server'

import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'

import { getAllProducts } from '@/services/api'

import { ApiResponse } from '@/types/ApiType'

import Typography from '@/ui/typography/Typography'

import s from './page.module.scss'

export default async function Home() {
  const res: ApiResponse = await getAllProducts()
  const products = res.data.items

  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.container}>
          <Typography className={s.title_center} tag="h2">
            Products
          </Typography>

          <ProductsGrid products={products} />
        </div>
      </main>
    </div>
  )
}
