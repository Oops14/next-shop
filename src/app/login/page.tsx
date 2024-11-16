'use client'

import Form from '@/modules/auth/form/Form'

import s from './page.module.scss'

const Login = () => {
  return (
    <div className={s.login_page}>
      <div className={s.container}>
        <Form />
      </div>
    </div>
  )
}

export default Login
