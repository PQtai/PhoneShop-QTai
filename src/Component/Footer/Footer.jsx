import React from 'react'
import {Grid} from '@mui/material'


import clsx from 'clsx'
import style from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={clsx(style.footer)} >
      <Grid container justify="center" spacing={5}>
          <Grid item md={4} >
            <p className={clsx(style.footerTitle)}>Thành lập</p>
            <span className={clsx(style.footerDescription)} >Được thành lập vào năm 2022 tại ABC, QTS bắt nguồn từ tư duy loại bỏ việc 
                  xây dựng thương hiệu được trang bị hóa quá mức và tập 
                  trung chủ yếu vào việc chất lượng và chăm sóc khánh khàng.
            </span>
            <p className={clsx(style.readMore)}>Đọc thêm</p>
          </Grid>
          <Grid item md={2} >
            <p className={clsx(style.footerTitle)}>Địa Chỉ</p>
            <ul className={clsx(style.footerList)}>
                <li className={clsx(style.footerItem)} >
                   <span> 456 Nguyễn Văn C</span>
                </li>
                <li className={clsx(style.footerItem)} >
                   <span>TP Đà Nẵng</span> 
                </li>
            </ul>
          </Grid>
          <Grid item md={2} >
            <p className={clsx(style.footerTitle)}>Liên Lạc</p>
            <ul className={clsx(style.footerList)} >
                <li className={clsx(style.footerItem)} >
                   <span> Gửi email cho chúng tôi</span>
                </li>
                <li className={clsx(style.footerItem)} >
                   <span>+84 (0) 35 97 32 410</span> 
                </li>
            </ul>
          </Grid>
          <Grid item md={2} >
            <p className={clsx(style.footerTitle)}>Thông tin</p>
            <ul className={clsx(style.footerList)} >
                <li className={clsx(style.footerItem)} >
                   <span>Thông tin vận chuyển</span> 
                </li>
                <li className={clsx(style.footerItem)} >
                   <span>Nghề nghiệp</span> 
                </li>
                <li className={clsx(style.footerItem)} >
                   <span>Bán sỉ</span> </li>
                <li className={clsx(style.footerItem)} >
                   <span>Điều khoản dịch vụ</span>
                </li>
                <li className={clsx(style.footerItem)} >
                   <span>Chính sách hoàn lại tiền</span> 
                </li>
            </ul>
          </Grid>
          <Grid item md={2} >
            <p className={clsx(style.footerTitle)}>Theo giõi chúng tôi</p>
            <ul className={clsx(style.footerList)} >
                <li className={clsx(style.footerItem)} >
                   <span>Instagram</span> 
                </li>
                <li className={clsx(style.footerItem)} >
                   <span>Facebook</span> 
                </li>
            </ul>
          </Grid>
      </Grid>
    </div>
  )
}

export default Footer
