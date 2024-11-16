import Link from 'next/link'

import React from 'react'

import s from './HeaderMenu.module.scss'

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/products' },
]

const HeaderMenu = () => {
  return (
    <ul className={s.header_bottom__menu}>
      {menuItems.map((i, index) => {
        return (
          <li key={index}>
            <Link href={i.path}>{i.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderMenu
