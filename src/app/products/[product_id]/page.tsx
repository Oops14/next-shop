'use server'

import Image from 'next/image'

import React, { FC } from 'react'

import ReviewForm from '@/components/ReviewForm/ReviewForm'

import img from '@/assets/images/hoodie_3_front.webp'

import { getProductById } from '@/services/api'

import { ProductType } from '@/types/ProductType'

import Typography from '@/ui/typography/Typography'

import s from '../../page.module.scss'

interface PageProps {
  params: { product_id: string }
}

const Page: FC<PageProps> = async ({ params }) => {
  const { product_id } = await params
  const product = await getProductById(Number(product_id))
  const productData: ProductType = product.data

  return (
    <div className={'product_page'}>
      <div className={s.container}>
        <div className={s.product_page__inner}>
          <div className="product_page__image">
            <Image src={img} alt="Hoodie" />
          </div>
          <div className="product_page__summary">
            <Typography tag="h2">{productData.title}</Typography>
            <Typography>{productData.description}</Typography>
          </div>
        </div>

        <div className="block_reviews">
          <ReviewForm productId={productData.id} />
        </div>
      </div>
    </div>
  )
}

export default Page
