import React, { useState, useRef } from 'react'
import {Routes , Route , Link } from 'react-router-dom'

// import Products from './Component/Products/Products'

import HomePage from './pages/Home/HomePage'
import SalePage from './pages/Sale/SalePage'
import ShopAllPage from './pages/ShopAll/ShopAllPage'
import Navbar from './Component/Navbar/Navbar'
import Datas ,{PhonePopular} from './Datas'
import CardPage from './pages/Card/CardPage'
import InfoProductPage from './pages/InfoProduct/InfoProductPage'
import Footer from './Component/Footer/Footer'
import cursor from './assets/img/cursor-close.png'
import Overlay from './Component/Overlay/Overlay'
const App = () => {
  const [productCards,setProductCards] = useState([]);
  const [priceProduct , setPriceProduct] = useState(0);
  const [arrayProductCollapse , setArrayProductCollapse] = useState([]);
  const [idInfoProduct , setIdInfoProduct] = useState();
  const [overlay , setOverlay] = useState(false);
  const [displayFormConfirm,setDisplayFormConfirm] = useState(false);
  const countsProduct = useRef({})
  const elementOverlay = useRef();
  const elementFormConfirm = useRef();
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 6);
    }
  };
  const handleDeleteProduct = (currentIndex) => {
    var arr = productCards.filter((productCard, index) => {
      return productCard.id !== currentIndex;
    })
    setProductCards(arr);
  }
  return (
    <div>
      <Navbar
      Link={Link}
      productCards={productCards}
      Datas={Datas}
      priceProduct = {priceProduct}
      setPriceProduct= {setPriceProduct}
      setProductCards={setProductCards}
      arrayProductCollapse= {arrayProductCollapse}
      setArrayProductCollapse= {setArrayProductCollapse}
      countsProduct= {countsProduct}
      handleDeleteProduct= {handleDeleteProduct}
      scrollToTop = {scrollToTop}
      overlay= {overlay}
      setOverlay= {setOverlay}
      elementOverlay= {elementOverlay}
      displayFormConfirm= {displayFormConfirm}
      ></Navbar>
      <Routes>
          <Route path='/PhoneShop-QTai' 
          element={
          <HomePage 
            PhonePopular={PhonePopular}  
            productCards={productCards}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            setProductCards={setProductCards}
            Link= {Link}
          />}/>
          <Route path='/PhoneShop-QTai/SalePage' element={<SalePage/>}/>
          <Route path='/PhoneShop-QTai/ShopAllPage' 
          element={
          <ShopAllPage
            productCards={productCards}
            setProductCards={setProductCards}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            Link= {Link}
            scrollToTop= {scrollToTop}
            setIdInfoProduct= {setIdInfoProduct}
          />}/>
          <Route path='/PhoneShop-QTai/CardPage'
          element={<CardPage
            arrayProductCollapse= {arrayProductCollapse}
            setArrayProductCollapse= {setArrayProductCollapse}
            countsProduct= {countsProduct}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            handleDeleteProduct= {handleDeleteProduct}
            productCards= {productCards}
            setProductCards= {setProductCards}
          />}
          ></Route>
          <Route path='/PhoneShop-QTai/InfoProduct' 
          element={
          <InfoProductPage
          idInfoProduct= {idInfoProduct}
          setIdInfoProduct= {setIdInfoProduct}
          scrollToTop = {scrollToTop}
          setOverlay= {setOverlay}
          displayFormConfirm= {displayFormConfirm}
          setDisplayFormConfirm= {setDisplayFormConfirm}
          />}/>
      </Routes>
      <Footer></Footer>
      <Overlay
      elementOverlay={elementOverlay}
      setOverlay={setOverlay}
      cursor={cursor}
      overlay={overlay}
      setDisplayFormConfirm= {setDisplayFormConfirm}
      elementFormConfirm={elementFormConfirm}
      displayFormConfirm={displayFormConfirm}
      />
    </div>
  )
}
export default App
