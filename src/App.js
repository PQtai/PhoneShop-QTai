import React, { useState, useRef,useEffect } from 'react'
import {Routes , Route , Link } from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import SalePage from './pages/Sale/SalePage'
import ShopAllPage from './pages/ShopAll/ShopAllPage'
import Navbar from './Component/Navbar/Navbar'
import Datas ,{PhonePopular} from './Datas'
import CartPage from './pages/Cart/CartPage'
import InfoProductPage from './pages/InfoProduct/InfoProductPage'
import Footer from './Component/Footer/Footer'
import cursor from './assets/img/cursor-close.png'
import Overlay from './Component/Overlay/Overlay'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Loading from './Component/Loading/Loading'
import Notification from './Component/Notification/Notification'
const App = () => {
  const [productCarts,setProductCarts] = useState([]);
  const [priceProduct , setPriceProduct] = useState(0);
  const [arrayProductCollapse , setArrayProductCollapse] = useState([]);
  const [idInfoProduct , setIdInfoProduct] = useState();
  const [overlay , setOverlay] = useState(false);
  const [displayFormConfirm,setDisplayFormConfirm] = useState(false);
  const [displayFormRegister,setDisplayFormRegister] = useState(false);
  const [displayFormLogin,setDisplayFormLogin] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationMessage , setNotificationMessage] = useState();
  const [message , setMessage] = useState("");
  const [checkLogin , setCheckLogin] = useState(false);
  const countsProduct = useRef({});
  const elementOverlay = useRef();
  const elementFormConfirm = useRef();
  const scrollToTop =  () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 6);
    }
  };
  const handleDeleteProduct = (currentIndex) => {
    var arr = productCarts.filter((productCart, index) => {
      return productCart.id !== currentIndex;
    })
    setProductCarts(arr);
  }
  // setIsLoading(true);
  useEffect(() => {
    localStorage.clear();
  },[])
  return (
    <div>
      <Navbar
      Link={Link}
      productCarts={productCarts}
      Datas={Datas}
      priceProduct = {priceProduct}
      setPriceProduct= {setPriceProduct}
      setProductCarts={setProductCarts}
      arrayProductCollapse= {arrayProductCollapse}
      setArrayProductCollapse= {setArrayProductCollapse}
      countsProduct= {countsProduct}
      handleDeleteProduct= {handleDeleteProduct}
      scrollToTop = {scrollToTop}
      overlay= {overlay}
      setOverlay= {setOverlay}
      elementOverlay= {elementOverlay}
      displayFormConfirm= {displayFormConfirm}
      displayFormRegister= {displayFormRegister}
      setDisplayFormRegister= {setDisplayFormRegister}
      setDisplayFormLogin= {setDisplayFormLogin}
      checkLogin= {checkLogin}
      setCheckLogin= {setCheckLogin}
      ></Navbar>
      <Routes>
          <Route path='/PhoneShop-QTai' 
          element={
          <HomePage 
            PhonePopular={PhonePopular}  
            productCarts={productCarts}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            setProductCarts={setProductCarts}
            openNotification= {openNotification}
            setOpenNotification= {setOpenNotification}
            notificationMessage= {notificationMessage}
            setNotificationMessage= {setNotificationMessage}
            setMessage= {setMessage}
            Link= {Link}
            setIdInfoProduct= {setIdInfoProduct}
          />}/>
          <Route path='/PhoneShop-QTai/SalePage' element={<SalePage/>}/>
          <Route path='/PhoneShop-QTai/ShopAllPage/keywork=:search' 
          element={
          <ShopAllPage
            productCarts={productCarts}
            setProductCarts={setProductCarts}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            Link= {Link}
            scrollToTop= {scrollToTop}
            idInfoProduct= {idInfoProduct}
            setIdInfoProduct= {setIdInfoProduct}
            openNotification={openNotification}
            setNotificationMessage= {setNotificationMessage}
            notificationMessage={notificationMessage}
            setOpenNotification={setOpenNotification}
            setMessage= {setMessage}
          />}/>
          <Route path='/PhoneShop-QTai/CartPage'
          element={<CartPage
            arrayProductCollapse= {arrayProductCollapse}
            setArrayProductCollapse= {setArrayProductCollapse}
            countsProduct= {countsProduct}
            priceProduct= {priceProduct}
            setPriceProduct= {setPriceProduct}
            handleDeleteProduct= {handleDeleteProduct}
            productCarts= {productCarts}
            setProductCarts= {setProductCarts}
          />}
          ></Route>
          <Route path={'/PhoneShop-QTai/ShopAllPage/'+ idInfoProduct}
          element={
          <InfoProductPage
          idInfoProduct= {idInfoProduct}
          setIdInfoProduct= {setIdInfoProduct}
          scrollToTop = {scrollToTop}
          setOverlay= {setOverlay}
          displayFormConfirm= {displayFormConfirm}
          setDisplayFormConfirm= {setDisplayFormConfirm}
          elementFormConfirm={elementFormConfirm}
          checkLogin= {checkLogin}
          setOpenNotification= {setOpenNotification}
          setNotificationMessage= {setNotificationMessage}
          setMessage= {setMessage}
          />}/>
      </Routes>
      <Footer></Footer>
      <Overlay
      elementOverlay={elementOverlay}
      setOverlay={setOverlay}
      cursor={cursor}
      overlay={overlay}
      displayFormConfirm={displayFormConfirm}
      setDisplayFormConfirm= {setDisplayFormConfirm}
      displayFormRegister= {displayFormRegister}
      setDisplayFormRegister= {setDisplayFormRegister}
      displayFormLogin= {displayFormLogin}
      setDisplayFormLogin= {setDisplayFormLogin}
      />
      <Login
      overlay={overlay}
      setOverlay={setOverlay}
      displayFormLogin= {displayFormLogin}
      setDisplayFormLogin= {setDisplayFormLogin}
      setDisplayFormRegister= {setDisplayFormRegister}
      setIsLoading={setIsLoading}
      setOpenNotification= {setOpenNotification}
      setNotificationMessage= {setNotificationMessage}
      setMessage= {setMessage}
      setCheckLogin= {setCheckLogin}
      ></Login>
      <Register
      overlay={overlay}
      setOverlay={setOverlay}
      displayFormRegister= {displayFormRegister}
      setDisplayFormRegister= {setDisplayFormRegister}
      setDisplayFormLogin= {setDisplayFormLogin}
      setMessage= {setMessage}
      setIsLoading= {setIsLoading}
      setOpenNotification= {setOpenNotification}
      setNotificationMessage= {setNotificationMessage}
      ></Register>
      <Loading
      isLoading= {isLoading}
      setIsLoading={setIsLoading}
      />
       <Notification 
      openNotification={openNotification}
      notificationMessage={notificationMessage}
      setOpenNotification={setOpenNotification}
      message={message}
      ></Notification>
    </div>
  )
}
export default App
