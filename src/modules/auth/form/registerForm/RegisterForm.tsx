import React, { FC } from 'react'

import BaseInput from '@/ui/baseInput/BaseInput'
import BaseButton from '@/ui/baseButton/BaseButton'

import s from '@/modules/auth/form/Form.module.scss'

interface RegisterFormProps {
  phone: string
  setPhone: (phone: string) => void
  error: string | null
  setIsLogin: (isLogin: boolean) => void
  handleRegister: () => void
}

const RegisterForm: FC<RegisterFormProps> = ({ phone, setPhone, error, setIsLogin, handleRegister }) => {
  return (
    <div className={s.login_form}>
      <BaseInput
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={s.login_form__input}
      />

      <BaseButton onClick={handleRegister} className={s.login_form__button}>
        Send code
      </BaseButton>
      <BaseButton onClick={() => setIsLogin(true)} className={s.login_form__button}>
        Back to Login
      </BaseButton>

      {error && <p>{error}</p>}
    </div>
  )
}

export default RegisterForm
