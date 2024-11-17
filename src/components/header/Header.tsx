'use server'

import { FC } from 'react'

import AuthLink from '@/components/header/authLink/AuthLink'

import NavigationMenu from '@/shared/navigationMenu/NavigationMenu'

import s from './Header.module.scss'

interface HeaderProps {
  isAuthenticated: boolean
}

const Header: FC<HeaderProps> = ({ isAuthenticated }) => {
  return (
    <div className={s.main_header}>
      <div className={s.container}>
        <div className={s.header_top}>
          <div className={s.header_top__logo}>
            <span>Storefront</span>
          </div>
          <div className={s.header_top__right_menu}>
            <div className={s.my_account}>
              <AuthLink isAuthenticated={isAuthenticated} />
            </div>
          </div>
        </div>
        <div className={s.header_bottom}>
          <div className={s.header_bottom__inner}>
            <NavigationMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
