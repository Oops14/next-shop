import React, { FC } from 'react'

import ReviewForm from '@/components/ReviewForm/ReviewForm'

import s from '../../../page.module.scss'

interface ReviewsProps {
  params: { product_id: string }
}

const Reviews: FC<ReviewsProps> = async ({ params }) => {
  const { product_id } = params

  return (
    <div className={s.container}>
      <ReviewForm productId={product_id} />
    </div>
  )
}

export default Reviews
