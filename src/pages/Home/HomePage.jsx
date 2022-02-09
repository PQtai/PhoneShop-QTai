import React from 'react'


import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
import Footer from '../../Component/Footer/Footer'
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
      <Footer></Footer>
    </>
  )
}

export default HomePage
