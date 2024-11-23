'use client'

import Link from 'next/link'

import { ButtonHTMLAttributes, FC } from 'react'

import clsx from 'clsx'

import s from './BaseButton.module.scss'

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

const BaseButton: FC<BaseButtonProps> = ({ href, ...props }) => {
  if (href) {
    return (
      <Link href={href} className={clsx(s.btn, props.className)}>
        {props.children}
      </Link>
    )
  }

  return (
    <button {...props} className={clsx(s.btn, props.className)}>
      {props.children}
    </button>
  )
}

export default BaseButton
