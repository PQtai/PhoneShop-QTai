import React from 'react'
import { Outlet } from 'react-router-dom'


import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
const HomePage = ({PhonePopular , quantity ,setQuantity , productCards,setProductCards , setPriceProduct , priceProduct , Link}) => {
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
      ></Main>
      <Outlet></Outlet>
    </>
  )
}

export default HomePage
