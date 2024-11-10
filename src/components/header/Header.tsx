'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import { FC } from 'react'

import { deleteSession } from '@/services/session'

import Input from '@/ui/baseInput/BaseInput'

import s from './Header.module.scss'

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/products' },
]

interface HeaderProps {
  isAuthenticated: boolean
}

const Header: FC<HeaderProps> = ({ isAuthenticated }) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await deleteSession()

    router.push('/login')
  }

  return (
    <div className={s.main_header}>
      <div className={s.container}>
        <div className={s.header_top}>
          <div className={s.header_top__logo}>
            <span>Storefront</span>
          </div>
          <div className={s.header_top__right_menu}>
            <div className={s.my_account}>
              {isAuthenticated ? (
                <Link href="/login" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
            <div className={s.search}>
              <Input placeholder="Search for products" type="text" />
            </div>
          </div>
        </div>
        <div className={s.header_bottom}>
          <div className={s.header_bottom__inner}>
            <ul className={s.header_bottom__menu}>
              {menuItems.map((i, index) => {
                const isActive = pathname === i.path

                return (
                  <li key={index}>
                    <Link className={isActive ? s.active : ''} href={i.path}>
                      {i.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <a href="#" className={s.header_bottom__mini_cart}>
            <span>0.00</span>
            <span className={s.header_bottom__item_counter}>0 items</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
