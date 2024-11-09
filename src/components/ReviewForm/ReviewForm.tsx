'use client'

import React, { useState } from 'react'

import { submitReview } from '@/services/api'

import BaseButton from '@/ui/baseButton/BaseButton'
import BaseInput from '@/ui/baseInput/BaseInput'

import s from './ReviewForm.module.scss'

/**
 * TODO: Implement Error handing.
 */
const ReviewForm = ({ productId }: { productId: string }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  console.log(productId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await submitReview(productId, { rating, review })

      alert('Review submitted successfully')
    } catch (error) {
      console.error(error)

      alert('Failed to submit review')
    }
  }

  return (
    <form className={s.r_form} onSubmit={handleSubmit}>
      <h1>Leave a Review for this product.</h1>
      <BaseInput
        type="number"
        className={s.r_name}
        placeholder="Set the rating"
        onChange={(e) => setRating(e.currentTarget.valueAsNumber)}
      />
      <textarea className={s.r_textarea} value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      <BaseButton className={s.r_btn} type="submit">
        Send
      </BaseButton>
    </form>
  )
}

export default ReviewForm
