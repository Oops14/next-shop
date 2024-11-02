'use server'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import React, { FC } from 'react'

import s from './Category.module.scss'

interface CategoryProps {
  title: string
  img: StaticImageData
  quantity: number
}

const Category: FC<CategoryProps> = ({ title, img, quantity }) => {
  return (
    <div className={s.category_item}>
      <div className={s.category_image}>
        <Image src={img} alt={title} width={330} height={600} />
      </div>
      <div className={s.category_title}>
        <Link href={'/'}>{title}</Link>
        <span className={s.category_count}>({quantity})</span>
      </div>
    </div>
  )
}

export default Category
