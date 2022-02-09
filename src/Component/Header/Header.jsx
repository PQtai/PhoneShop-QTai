import React from 'react'
import { Grid } from '@mui/material'
import style from './Header.module.scss'
import clsx from 'clsx'
const Header = ({Link}) => {
  return (
    <header className={clsx(style.header)} >
        <Grid container justify="center" spacing="0">
            <Grid item md={8.5} sm={12} xs={12}>
                <div className={clsx(style.headerBox)}>
                    <div className={clsx(style.headerBoxImg)}
                    style={{backgroundImage : "url('https://cdn.pocket-lint.com/r/s/1200x630/assets/images/157948-phones-news-samsung-galaxy-z-fold-3-renders-and-full-specs-leak-image1-vtkgup9vo2.jpg')"}}
                    ></div>
                </div>
            </Grid>
            <Grid item md={3.5} >
                <div className={clsx(style.introduce)}>
                    <div className={clsx(style.introduceTitle)}>
                        <p className={clsx(style.preamble)}>Bắt đầu năm 2022 đầy sang trọng</p>
                        <h2 className={clsx(style.preambleTitle)}>Những mẫu điện thoại mới nhất luôn được cập nhật</h2>
                        <Link to='/shopAllPage' className={clsx(style.link)} >
                            <span className={clsx(style.preambleHover)}>Mua ngay bây giờ</span>
                        </Link>
                    </div>
                </div>
            </Grid>
        </Grid>
    </header>
  )
}

export default Header
