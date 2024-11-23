'use server'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import img from '@/assets/images/hoodie_3_front.webp'

import { ProductType } from '@/types/ProductType'

import s from './Product.module.scss'

const Product: FC<ProductType> = ({ id, title, description }) => {
  return (
    <div className={s.product_grid_item} data-testid="product-item">
      <div className={s.product_top}>
        <div className={s.product_image}>
          <Link href={`/products/${id}`}>
            <Image src={img} alt={title} />
          </Link>
        </div>
      </div>
      <div className={s.product_bottom}>
        <div className={s.product_title}>
          <Link href={`/products/${id}`}>{title}</Link>
        </div>

        <p>{description}</p>
        <div className={s.product_price}>Free</div>
      </div>
    </div>
  )
}

export default Product
