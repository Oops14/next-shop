'use client'

import Image from 'next/image'

import { FC } from 'react'

import img from '@/assets/images/hoodie_3_front.webp'

import { ProductType } from '@/types/ProductType'

import BaseButton from '@/ui/baseButton/BaseButton'

import s from './Product.module.scss'

const Product: FC<ProductType> = ({ title, description }) => {
  return (
    <div className={s.product_grid_item}>
      <div className={s.product_top}>
        <div className={s.product_image}>
          <a href="#">
            <Image src={img} alt={title} />
          </a>
        </div>
      </div>
      <div className={s.product_bottom}>
        <div className={s.product_title}>
          <a href="#">{title}</a>
        </div>
        <p>{description}</p>
        <div className={s.product_price}>Free</div>
        <BaseButton>Add to cart</BaseButton>
      </div>
    </div>
  )
}

export default Product
