'use server'

import CategoriesGrid from '@/components/CategoriesGrid/CategoriesGrid'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'

import Typography from '@/ui/typography/Typography'

import s from './page.module.scss'

export default async function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.container}>
          <Typography className={s.title_center} tag="h2">
            Categories
          </Typography>
          <CategoriesGrid />

          <Typography className={s.title_center} tag="h2">
            Products
          </Typography>
          <ProductsGrid />
        </div>
      </main>
    </div>
  )
}
