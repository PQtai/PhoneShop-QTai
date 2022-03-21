import Datas from '../../Datas'
import style from './Products.module.scss'
import { useNavigate } from 'react-router-dom';


import clsx from 'clsx'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'
import { Grid ,Container} from '@mui/material'


const Products = ( {
    productCarts , 
    setProductCarts , 
    priceProduct , 
    setPriceProduct, 
    arrProductsFilter , 
    grid , 
    Link,
    idInfoProduct,
    setIdInfoProduct,
    setOpenNotification,
    setNotificationMessage,
    keyworkSearch,
    setMessage
    }) => {

    const navigate = useNavigate();
  return (
    <main className={clsx(style.products)} >
        <Container fixed>
        <div>
            <h2>{
                (arrProductsFilter.length !== 0) && (keyworkSearch !== 'all')?
                arrProductsFilter[0].theloai:
                (keyworkSearch === 'all'?"Tất cả sản phẩm":"Không tìm thấy sản phẩm nào")
            }
            </h2>
        </div>

        <Grid container  spacing={4} justify="center">
        {(arrProductsFilter?arrProductsFilter:Datas).map((data , index) => {
            return (
            <Grid key={index} item xs={grid?grid.xs:12} sm={grid?grid.sm:6} md={grid?grid.md:4}>
                    <div
                    onClick={() =>{
                        setIdInfoProduct(data.id);
                        navigate("/PhoneShop-QTai/ShopAllPage/"+ data.id);
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
                                    className={clsx(style.btnAddCart)} 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if(localStorage.customerName){
                                            e.preventDefault();
                                            setOpenNotification(true);
                                            setNotificationMessage("success");
                                            setMessage("Thêm thành công!")
                                            e.target.style.cursor = 'not-allowed';
                                            setTimeout(() => {
                                                setProductCarts(productCarts.concat([data]));
                                                setPriceProduct( priceProduct + data.price);
                                                e.target.style.cursor = 'pointer';
                                            },[1000])
                                        }else{
                                            setOpenNotification(true);
                                            setNotificationMessage("info");
                                            setMessage("Bạn cần đăng nhập để thực hiện chức năng!")
                                        }
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
        </Container>
    </main>
  )
}

export default Products
