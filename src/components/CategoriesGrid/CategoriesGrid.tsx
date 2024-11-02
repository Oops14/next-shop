'use server'

import Category from '@/shared/category/Category'

import s from './CategoriesGrid.module.scss'

import closingImage from '@/assets/images/closing.webp'
import kitchenImage from '@/assets/images/kitchen-category.webp'
import electronicsImage from '@/assets/images/electronics-category.webp'

const categories = [
  { title: 'Closing', img: closingImage },
  { title: 'Kitchen', img: kitchenImage },
  { title: 'Electronics', img: electronicsImage },
]

const CategoriesGrid = () => {
  return (
    <div className={s.categoeis_grid}>
      {categories.map((i) => {
        return <Category title={i.title} img={i.img} quantity={0} />
      })}
    </div>
  )
}

export default CategoriesGrid
