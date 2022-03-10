import Datas from '../../Datas'
import style from './Products.module.scss'



import clsx from 'clsx'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'
import { Grid } from '@mui/material'


const Products = ( {
    productCards , 
    setProductCards , 
    priceProduct , 
    setPriceProduct, 
    arrProductsFilter , 
    grid , 
    isSuccess,
    Link,
    setIdInfoProduct
    }) => {



    
  return (
    <main className={clsx(style.products)} >
        <div>
            <h2>Tất cả sản phẩm</h2>
        </div>
        <Grid container  spacing={1} justify="center">
        {(arrProductsFilter?arrProductsFilter:Datas).map((data , index) => {
            return (
            <Grid key={index} item xs={grid?grid.xs:12} sm={grid?grid.sm:6} md={grid?grid.md:4}>
                <Link to="/PhoneShop-QTai/InfoProduct" >
                    <div 
                    onClick={()=> {
                        setIdInfoProduct(data.id);
                    }}
                    className = {clsx(style.itemProduct)}>
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        isSuccess.current = true;
                                        if(isSuccess.current){
                                            e.target.style.cursor = 'not-allowed';
                                            setTimeout(() => {
                                                setProductCards(productCards.concat([data]));
                                                setPriceProduct( priceProduct + data.price);
                                                e.target.style.cursor = 'pointer';
                                            },[1000]);
                                        }
                                    }}
                                    >
                                        <AddShoppingCartIcon className={clsx(style.btnIcon)} />
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Link>
                </Grid>
            )
        })}
        </Grid>
    </main>
  )
}

export default Products
