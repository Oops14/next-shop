'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { FC } from 'react'

interface AuthLinkProps {
  isAuthenticated: boolean
}

const AuthLink: FC<AuthLinkProps> = ({ isAuthenticated }) => {
  const router = useRouter()

  const handleLogout = async () => {
    router.push('/login')
  }

  return isAuthenticated ? (
    <Link href="/login" onClick={handleLogout}>
      Logout
    </Link>
  ) : (
    <Link href="/login">Login</Link>
  )
}

export default AuthLink
