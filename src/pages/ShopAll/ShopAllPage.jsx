import style from './ShopAllPage.module.scss'
import Products from '../../Component/Products/Products'
import Footer from '../../Component/Footer/Footer'
import ButtonFind from '../../Component/ButtonFind/ButtonFind'


import clsx from 'clsx'
import React from 'react'
const shopAll = ( {productCards , setProductCards , priceProduct , setPriceProduct} ) => {
  return (
    <div className={clsx(style.shopAll)} >
      <Products
        productCards={productCards}
        setProductCards={setProductCards}
        priceProduct={priceProduct}
        setPriceProduct={setPriceProduct}
      ></Products>
      <ButtonFind/>
      <Footer></Footer>
    </div>
  )
}

export default shopAll
