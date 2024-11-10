'use client'

import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

import { login, register } from '@/modules/auth'

import { createSession } from '@/services/session'

import { TokenApiResponse } from '@/types/ApiType'

import BaseButton from '@/ui/baseButton/BaseButton'
import BaseInput from '@/ui/baseInput/BaseInput'

import s from './LoginForm.module.scss'

const LoginForm = () => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLogin, setIsLogin] = useState(true)

  const router = useRouter()

  const handleLogin = async () => {
    try {
      const data: TokenApiResponse = await login(phone, code)

      setError(null)

      await createSession(data.data.token)

      router.push('/')
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleRegister = async () => {
    try {
      const data = await register(phone)

      alert(data.data.message)

      setIsLogin(true)

      setError(null)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <div className={s.login_form}>
        {isLogin ? (
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
        ) : (
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
        )}
      </div>
    </>
  )
}

export default LoginForm
