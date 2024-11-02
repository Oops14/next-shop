import { FC, InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './BaseInput.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className={clsx(s.base_input, props.className)} />
}

export default Input
