'use client'

import Image, { StaticImageData } from 'next/image'

import { FC } from 'react'

import BaseButton from '@/ui/baseButton/BaseButton'

import s from './Product.module.scss'

interface ProductProps {
  title: string
  img: StaticImageData
  price: string
}

const Product: FC<ProductProps> = ({ title, img, price }) => {
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
        <div className={s.product_price}>£{price}</div>
        <BaseButton>Add to cart</BaseButton>
      </div>
    </div>
  )
}

export default Product
