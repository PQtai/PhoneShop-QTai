import React from 'react'
import {Link} from 'react-router-dom'

import style from './ButtonFind.module.scss'
import clsx from 'clsx'
const ButtonFind = () => {
  return (
    <div className={clsx(style.Find)}>
        <div className={style.FindProduct} >
          <Link to="/PhoneShop-QTai/shopAllPage" >
              <button className={clsx(style.btnGrid)}>Lưới</button>
          </Link>
          <Link to="/PhoneShop-QTai/searchPage" >
              <button className={clsx(style.btnSearch)}>Lọc</button>
          </Link>
        </div>
    </div>
  )
}

export default ButtonFind
