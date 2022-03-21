import React , {useEffect} from 'react'
import { Outlet } from 'react-router-dom'


import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
const HomePage = ({PhonePopular ,
  quantity ,
  setQuantity ,
  productCarts,
  setProductCarts , 
  setPriceProduct , 
  priceProduct , 
  Link,
  isSuccess,
  notificationMessage,
  setNotificationMessage,
  openNotification,
  setOpenNotification,
  setMessage
  }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <Header
      Link={Link}
      ></Header>
      <Main 
      quantity={quantity}
      PhonePopular={PhonePopular} 
      setQuantity={setQuantity}
      productCarts={productCarts}
      priceProduct={priceProduct}
      setProductCarts={setProductCarts}
      setPriceProduct={setPriceProduct}
      isSuccess = {isSuccess}
      notificationMessage = {notificationMessage}
      setNotificationMessage= {setNotificationMessage}
      openNotification={openNotification}
      setOpenNotification={setOpenNotification}
      setMessage={setMessage}
      ></Main>
      <Outlet></Outlet>
    </>
  )
}

export default HomePage
