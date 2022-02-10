import Datas from '../../Datas'

import React from 'react'
import { Grid } from '@mui/material'
import style from './Products.module.scss'
import clsx from 'clsx'
// import Container from '@mui/material/Container';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Products = ( {productCards , setProductCards , priceProduct , setPriceProduct, arrProductsFilter , grid} ) => {
  return (
    <main className={clsx(style.products)} >
        <div>
            <h2>Tất cả sản phẩm</h2>
        </div>
        <Grid container  spacing={0.25} justify="center">
        {(arrProductsFilter?arrProductsFilter:Datas).map((data , index) => {
            return (
                <Grid key={index} item xs={grid?grid.xs:12} sm={grid?grid.sm:6} md={grid?grid.md:4}>
                    <div   className = {clsx(style.itemProduct)}>
                        <img className={clsx(style.productImg)}  src={data.image} alt="ảnh sản phẩm" ></img>
                        <div className = {clsx(style.productTitle)}>
                            <h4 className={clsx(style.phoneName)} >{data.name}</h4>
                            <div className={clsx(style.phoneDecription)} >
                                <div className = {clsx(style.productInfo)}>
                                    <p className={clsx(style.phoneColor)} >Màu sắc :{data.color}</p>
                                    <span className={clsx(style.phoneSoid)} >Lượt mua :{data.soid}</span>
                                    <p className={clsx(style.phonePrice)} >Giá :{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</p>
                                </div>
                                <div className={clsx(style.productBtn)} >
                                    <button 
                                    className={clsx(style.btnAddCard)} 
                                    onClick={() => {
                                        setProductCards(productCards.concat([data]));
                                        setPriceProduct( priceProduct + data.price)
                                    }}
                                    >
                                        <AddShoppingCartIcon className={clsx(style.btnIcon)} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            )
        })}
        </Grid>
    </main>
  )
}

export default Products
