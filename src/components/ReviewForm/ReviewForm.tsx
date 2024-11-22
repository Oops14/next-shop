'use client'

import React, { useState } from 'react'

import { submitReview } from '@/services/api'

import BaseButton from '@/ui/baseButton/BaseButton'
import BaseInput from '@/ui/baseInput/BaseInput'
import Typography from '@/ui/typography/Typography'

import s from './ReviewForm.module.scss'

const ReviewForm = ({ productId }: { productId: number }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const rev = await submitReview(productId, { rating, text: review })
      console.log(rev)

      alert('Review submitted successfully')
    } catch (error) {
      console.error(error)

      alert('Failed to submit review')
    }
  }

  return (
    <>
      <div className={s.reviews__inner}>
        <div className={s.reviews}>
          <Typography tag="h6">Reviews</Typography>
          <div className={s.reviews__list}>There are no reviews yet.</div>
        </div>

        <div className={s.r_form}>
          <BaseInput
            type="number"
            min={0}
            max={5}
            className={s.r_name}
            placeholder="Set the rating"
            onChange={(e) => setRating(e.currentTarget.valueAsNumber)}
          />
          <textarea className={s.r_textarea} value={review} onChange={(e) => setReview(e.target.value)}></textarea>
          <div className={s.r_form__block_btn}>
            <BaseButton className={s.r_btn} type="button" onClick={handleSubmit}>
              Send
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
