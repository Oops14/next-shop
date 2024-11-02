'use server'

import Link from 'next/link'

import Input from '@/ui/baseInput/BaseInput'

import s from './Header.module.scss'

const menuItems = [{ title: 'Home' }, { title: 'Blog' }, { title: 'Shop' }]

const Header = () => {
  return (
    <div className={s.main_header}>
      <div className={s.container}>
        <div className={s.header_top}>
          <div className={s.header_top__logo}>
            <span>Storefront</span>
          </div>
          <div className={s.header_top__right_menu}>
            <div className={s.my_account}>
              <Link href="/">My Account</Link>
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
                return (
                  <li key={index}>
                    <Link href="/">{i.title}</Link>
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
