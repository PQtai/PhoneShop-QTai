import React from 'react'


import clsx from 'clsx'
import style from './CardPage.module.scss'
const CardPage = ({countsProduct , arrayProductCollapse , setArrayProductCollapse}) => {
  return (
    <div className={clsx(style.cardBody)} >
        <ul className={clsx(style.listCard)}>
          {arrayProductCollapse.map((productCollapse, index) => {
            return (
              <li>hello</li>
            )
          })}
        </ul>
    </div>
  )
}

export default CardPage
