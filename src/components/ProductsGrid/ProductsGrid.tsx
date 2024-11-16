'use server'

import { FC } from 'react'

import Product from '@/components/Product/Product'

import { ProductType } from '@/types/ProductType'

import s from './ProductsGrid.module.scss'

interface ProductsGridProps {
  products: ProductType[]
}

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className={s.products_grid}>
      {products.map((i) => (
        <Product
          key={i.id}
          title={i.title}
          id={i.id}
          description={i.description}
          created_at={i.created_at}
          updated_at={i.updated_at}
        />
      ))}
    </div>
  )
}

export default ProductsGrid
