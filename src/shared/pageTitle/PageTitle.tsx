import { FC, PropsWithChildren } from 'react'

import Typography from '@/ui/typography/Typography'

import s from './PageTitle.module.scss'

interface PageTitleProps extends PropsWithChildren<{}> {}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <div className={s.page_title}>
      <Typography tag="h1" className={s.page_title__title}>
        {children}
      </Typography>
    </div>
  )
}

export default PageTitle
