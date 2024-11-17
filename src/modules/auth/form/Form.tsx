'use client'

import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

import LoginForm from '@/modules/auth/form/loginForm/LoginForm'
import RegisterForm from '@/modules/auth/form/registerForm/RegisterForm'

import { login, register } from '@/services/auth'

import { TokenApiResponse } from '@/types/ApiType'

import s from './Form.module.scss'

const Form = () => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLogin, setIsLogin] = useState(false)

  const router = useRouter()

  const handleLogin = async () => {
    try {
      const data: TokenApiResponse = await login(phone, code)
      setError(null)

      // await createSession(data.data.token)

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
