import Image from 'next/image'

import React from 'react'

import payment_img from '@/assets/images/payments.png'

import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.main_footer}>
      <div className={s.container}>
        <div className={s.main_footer__inner}>
          <p className={s.main_footer__copyrights}>© 2024. All rights reserved.</p>
          <Image src={payment_img} alt={'payment'} />
        </div>
      </div>
    </div>
  )
}

export default Footer
