'use client'

import LoginForm from '@/modules/auth/loginForm/LoginForm'

import s from './page.module.scss'

const Login = () => {
  return (
    <div className={s.login_page}>
      <div className={s.container}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
