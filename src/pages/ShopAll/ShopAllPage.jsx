import style from './ShopAllPage.module.scss'
import Products from '../../Component/Products/Products'
import Datas from '../../Datas'
import Notification from '../../Component/Notification/Notification'
import { useLocation } from 'react-router-dom'


import clsx from 'clsx'
import React , {useEffect , useState} from 'react'
const ShopAllPage = ( {
  productCarts , 
  setProductCarts , 
  priceProduct , 
  setPriceProduct,
  scrollToTop,
  Link,
  idInfoProduct,
  setIdInfoProduct,
  openNotification,
  notificationMessage,
  setNotificationMessage,
  setOpenNotification,
  setMessage
  } ) => {


    const [arrProductsFilter , setArrProductsFilter] = useState(Datas);
    const location = useLocation();
    const keyworkSearch =  location.pathname?.split("keywork=")[1]
useEffect(() => {
  scrollToTop();
},[]);
useEffect(() => {
  const currentSearch =  Datas.some((data , index)=> {
    return data.theloai.toLowerCase().includes(keyworkSearch.toLowerCase());
  })
  if(!currentSearch){
    if(keyworkSearch === 'all'){
      setArrProductsFilter(Datas);
    }else{
      setArrProductsFilter([])
    }
  }else{
    scrollToTop();
    setArrProductsFilter(
      Datas.filter((data , index)=> {
        return data.theloai.toLowerCase().includes(keyworkSearch.toLowerCase());
      })
    )
  }// eslint-disable-next-line
},[keyworkSearch])
  return (
    <div className={clsx(style.shopAll)} >
     <div className={clsx(style.products)} >
      <Products
          productCarts={productCarts}
          setProductCarts={setProductCarts}
          priceProduct={priceProduct}
          setPriceProduct={setPriceProduct}
          arrProductsFilter ={arrProductsFilter}
          Link ={Link}
          idInfoProduct= {idInfoProduct}
          setIdInfoProduct={setIdInfoProduct}
          openNotification={openNotification}
          notificationMessage={notificationMessage}
          setOpenNotification={setOpenNotification}
          setNotificationMessage={setNotificationMessage}
          keyworkSearch={keyworkSearch}
          setMessage={setMessage}
        ></Products>
     </div>
      <Notification 
      openNotification={openNotification}
      notificationMessage={notificationMessage}
      setOpenNotification={setOpenNotification}
      ></Notification>  
    </div>
  )
}

export default ShopAllPage
