import React , {useEffect} from 'react'
import { Outlet } from 'react-router-dom'


import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
const HomePage = ({PhonePopular ,
  quantity ,
  setQuantity ,
  productCards,
  setProductCards , 
  setPriceProduct , 
  priceProduct , 
  Link,
  isSuccess
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
      productCards={productCards}
      priceProduct={priceProduct}
      setProductCards={setProductCards}
      setPriceProduct={setPriceProduct}
      isSuccess = {isSuccess}
      ></Main>
      <Outlet></Outlet>
    </>
  )
}

export default HomePage
