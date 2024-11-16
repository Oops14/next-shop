import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'

import { getAllProducts } from '@/services/api'

import { ProductsApi } from '@/types/ApiType'

import Typography from '@/ui/typography/Typography'

import s from '../page.module.scss'

const Shop = async () => {
  const res: ProductsApi = await getAllProducts()
  const products = res.data.items

  return (
    <div className={s.container}>
      <div>
        <Typography tag="h2" className={s.title_center}>
          Shop page
        </Typography>

        <ProductsGrid products={products} />
      </div>
    </div>
  )
}

export default Shop
