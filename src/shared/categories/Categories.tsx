import Image from 'next/image'

import { FC } from 'react'

import style from './CategoryGridItem.module.scss'

interface CategoryGridItem {
  title: string
  img: string
  quantity: number
}

const CategoryGridItem: FC<CategoryGridItem> = ({ title, img, quantity }) => {
  return (
    <div className={style.category_item}>
      <div className={style.category_image}>
        <Image src={img} alt={title} />
      </div>
      <div className={style.category_title}>
        {title} <span className="category_count">({quantity})</span>
      </div>
    </div>
  )
}

export default CategoryGridItem
