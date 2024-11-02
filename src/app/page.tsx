import CategoriesGrid from '@/components/CategoriesGrid/CategoriesGrid'

import s from './page.module.scss'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'

export default function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.container}>
          <CategoriesGrid />
          <ProductsGrid />
        </div>
      </main>
    </div>
  )
}
