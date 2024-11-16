import React, { FC } from 'react'

import BaseInput from '@/ui/baseInput/BaseInput'
import BaseButton from '@/ui/baseButton/BaseButton'

import s from '@/modules/auth/form/Form.module.scss'

interface LoginFormProps {
  phone: string
  setPhone: (phone: string) => void
  code: string
  setCode: (code: string) => void
  error: string | null
  setError: (error: string | null) => void
  isLogin: boolean
  setIsLogin: (isLogin: boolean) => void
  handleLogin: () => void
}

const LoginForm: FC<LoginFormProps> = ({ phone, setPhone, code, setCode, handleLogin, setIsLogin, error }) => {
  return (
    <div className={s.login_form}>
      <BaseInput
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={s.login_form__input}
      />
      <BaseInput
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={s.login_form__input}
      />

      <BaseButton onClick={handleLogin} className={s.login_form__button}>
        Login
      </BaseButton>
      <BaseButton onClick={() => setIsLogin(false)} className={s.login_form__button}>
        Register
      </BaseButton>

      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginForm
