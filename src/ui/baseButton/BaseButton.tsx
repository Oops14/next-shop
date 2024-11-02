'use client'

import { ButtonHTMLAttributes, FC } from 'react'

import clsx from 'clsx'

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

import s from './BaseButton.module.scss'

const BaseButton: FC<BaseButtonProps> = ({ ...props }) => {
  return (
    <button {...props} className={clsx(s.btn, props.className)}>
      {props.children}
    </button>
  )
}

export default BaseButton
