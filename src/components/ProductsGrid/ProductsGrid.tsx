'use server'

import Product from '@/shared/product/Product'

import s from './ProductsGrid.module.scss'

import img1 from '@/assets/images/hoodie_3_front.webp'
import img2 from '@/assets/images/T_7_front.webp'

const ProductsGrid = () => {
  return (
    <div className={s.products_grid}>
      <Product title={'Test'} img={img1} price={'22'} />
      <Product title={'Test'} img={img2} price={'22'} />
      <Product title={'Test'} img={img1} price={'22'} />
    </div>
  )
}

export default ProductsGrid
