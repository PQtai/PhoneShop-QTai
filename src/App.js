import React, {  } from 'react'
import {Routes , Route , Link } from 'react-router-dom'
import { useState } from 'react'

// import Products from './Component/Products/Products'

import HomePage from './pages/Home/HomePage'
import SalePage from './pages/Sale/SalePage'
import ShopAllPage from './pages/ShopAll/ShopAllPage'
import Navbar from './Component/Navbar/Navbar'
import Datas ,{PhonePopular} from './Datas'
import SearchPage from './pages/Search/SearchPage'
import CardPage from './pages/Card/CardPage'
import Footer from './Component/Footer/Footer'
const App = () => {
  const [productCards,setProductCards] = useState([]);
  const [priceProduct , setPriceProduct] = useState(0);
  // console.log(SearchPage);
  return (
    <div>
      <Navbar
      Link={Link}
      productCards={productCards}
      Datas={Datas}
      priceProduct = {priceProduct}
      setPriceProduct= {setPriceProduct}
      setProductCards={setProductCards}
      ></Navbar>
      <Routes>
          <Route path='/' 
          element={
          <HomePage 
            PhonePopular={PhonePopular}  
            productCards={productCards}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            setProductCards={setProductCards}
            Link= {Link}
          />}/>
          <Route path='/salePage' element={<SalePage/>}/>
          <Route path='/shopAllPage' 
          element={
          <ShopAllPage
            productCards={productCards}
            setProductCards={setProductCards}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            Link= {Link}
          />}/>
          <Route path='/searchPage' 
          element={<SearchPage
            PhonePopular={PhonePopular}  
            productCards={productCards}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            setProductCards={setProductCards}
          />}/>
          <Route path='/cardPage'
          element={<CardPage/>}
          ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App
