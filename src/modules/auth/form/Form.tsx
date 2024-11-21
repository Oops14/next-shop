'use client'

import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

import LoginForm from '@/modules/auth/form/loginForm/LoginForm'
import RegisterForm from '@/modules/auth/form/registerForm/RegisterForm'

import { login, register } from '@/services/auth'

import s from './Form.module.scss'

const Form = () => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLogin, setIsLogin] = useState(false)

  const router = useRouter()

  const handleLogin = async () => {
    try {
      await login(phone, code)
      setError(null)

      router.push('/')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const handleRegister = async () => {
    try {
      const data = await register(phone)

      alert(data.data.message)

      setIsLogin(true)
      setError(null)
    } catch (err: unknown) {
      const error = err as Error
      setError(error.message)
    }
  }

  return (
    <>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <div className={s.login_form}>
        {isLogin ? (
          <LoginForm
            phone={phone}
            setPhone={setPhone}
            code={code}
            setCode={setCode}
            error={error}
            setError={setError}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleLogin={handleLogin}
          />
        ) : (
          <RegisterForm
            phone={phone}
            setPhone={setPhone}
            error={error}
            setIsLogin={setIsLogin}
            handleRegister={handleRegister}
          />
        )}
      </div>
    </>
  )
}

export default Form
