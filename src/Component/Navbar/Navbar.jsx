import React, { useEffect, useRef , useState } from 'react'
import {useNavigate} from 'react-router-dom'
import clsx from 'clsx'
import style from './Navbar.module.scss'
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid , Container } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';



const Navbar = ({
  Link , 
  productCarts ,
  priceProduct,
  setPriceProduct,
  arrayProductCollapse,
  setArrayProductCollapse,
  countsProduct,
  handleDeleteProduct,
  scrollToTop,
  overlay,
  setOverlay,
  elementOverlay,
  displayFormConfirm,
  setDisplayFormRegister,
  setDisplayFormLogin,
  checkLogin,
  setCheckLogin,
  setProductCarts,
}) => {
  
  const elementNavbar = useRef();
  const elementSupport = useRef();
  const elementAccount = useRef();
  const elementCart = useRef();
  const [zIndexNav , setZIndexNav] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (values) => {
      navigate(`/PhoneShop-QTai/ShopAllPage/keywork=${values}`);
  }
  useEffect(() => {
    if(overlay){
      elementOverlay.current.style.display = 'flex';
    }else{
      elementOverlay.current.style.display = 'none';
      elementSupport.current.classList.remove(clsx(style.displaySup));
      elementAccount.current.classList.remove(clsx(checkLogin?style.displaylogged:style.displayAccount));
      elementCart.current.classList.remove(clsx(style.displayCartInf))
      setZIndexNav(false);
      if (document.documentElement.scrollTop > 60 ) {
        elementNavbar.current.classList.add(clsx(style.navbarScroll));
      }
      if(displayFormConfirm){
        setZIndexNav(true)
      }
    }
  },[overlay , displayFormConfirm])
  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 60
      || 
      elementAccount.current.offsetHeight > 0 
      || 
      elementCart.current.offsetHeight > 0
      || 
      elementSupport.current.offsetHeight > 0 
      ) {
        elementNavbar.current.classList.add(clsx(style.navbarScroll));
      }else{
        elementNavbar.current.classList.remove(clsx(style.navbarScroll));
      }
    }
  },[]);
  useEffect(() => {
    countsProduct.current = {};
    productCarts.forEach(cart => {
      countsProduct.current[cart.id] =  ( countsProduct.current[cart.id] || 0) + 1;
    })
    setArrayProductCollapse(productCarts.filter((cart , index) => {
      return productCarts.indexOf(cart) === index;
    }))
  },[productCarts])
  return (
    <Container fixed>
    <nav className={clsx(style.navbar ,style.navbarScroll, {
      [style.zIndexNav] : zIndexNav
    })} ref={elementNavbar} >
        <Link to='/PhoneShop-QTai'
        className={clsx(style.linkLogo)}
        >
          <div onClick={scrollToTop}  className={clsx(style.logo)} >
              <PhoneIphoneTwoToneIcon className={clsx(style.logoIcon)} />
              <h2 className={clsx(style.logoTitle)}>Q T S</h2>
          </div>
        </Link>
        <div className={clsx(style.category)}>
          <ul className={clsx(style.categoryList)}>
            <Link style={{textDecoration: 'none'}} to='/PhoneShop-QTai/ShopAllPage/keywork=all' ><li className={clsx(style.categoryItem)}>Trong Shop</li></Link>
            <Link style={{textDecoration: 'none'}} to='/PhoneShop-QTai/SalePage'><li className={clsx(style.categoryItem)}>Giảm Giá</li></Link>
          </ul>
          <ul className={clsx(style.categoryList,style.categoryCustomer)}>
              <li 
              className={clsx(style.categoryItem , style.itemSearch)}
              onClick={() => {
                elementSupport.current.classList.remove(clsx(style.displaySup));
                elementAccount.current.classList.remove(checkLogin?style.displaylogged:style.displayAccount);
                elementCart.current.classList.remove(clsx(style.displayCartInf));
                setOverlay(false);
              }} >
                <input 
                type="text" 
                className={clsx(style.search)} 
                placeholder='Tìm kiếm mẫu điện thoại mà bạn ưa thích' 
                onKeyDown={(e)=> {
                  if(e.key === 'Enter'){
                    handleSearch(e.target.value);
                  }
                }}
                onBlur={(e)=>{
                  e.target.value = '';
                }}
                ></input>
                <button>
                <SearchSharpIcon className={clsx(style.iconSearch)} />
                </button>
              </li>
              <li 
              className={clsx(style.categoryItem)}
              onClick={() => {
                setOverlay(true);
                elementSupport.current.classList.add(clsx(style.displaySup));
                elementAccount.current.classList.remove(clsx(checkLogin?style.displaylogged:style.displayAccount));
                
                elementCart.current.classList.remove(clsx(style.displayCartInf));
                elementNavbar.current.classList.add(clsx(style.navbarScroll));
              }}
              >
                Hỗ Trợ
              </li>
              <div ref={elementSupport} className={clsx(style.itemSup)} >
                <Grid container justify="center" spacing={0}>
                    <Grid item md={4}>
                        <p className={clsx(style.subTitle)}><span>Liên hệ</span></p>
                        <ul className={clsx(style.supList)}>
                          <li className={clsx(style.supItem)}>  
                            <span className={clsx(style.supItemTitle)}>Gửi email cho chúng tôi</span> 
                          </li>
                          <li className={clsx(style.supItem)}>  
                            <span className={clsx(style.supItemTitle)}>
                              <font>+84 (0) 35 97 32 410</font>
                            </span> 
                          </li>
                        </ul>
                    </Grid>
                    <Grid item md={4}>
                        <p className={clsx(style.subTitle)} ><span>Thông tin</span></p>
                        <ul className={clsx(style.supList)}>
                          <li className={clsx(style.supItem)}>
                            <span className={clsx(style.supItemTitle)}>Thông tin vận chuyển</span> 
                          </li>
                          <li className={clsx(style.supItem)}>
                            <span className={clsx(style.supItemTitle)}>Trả hàng & Trao đổi</span>
                          </li>
                          <li className={clsx(style.supItem)}>
                            <span className={clsx(style.supItemTitle)}>Hướng dẫn & kích thước</span> 
                          </li>
                          <li className={clsx(style.supItem)}>
                            <span className={clsx(style.supItemTitle)}>Bán buôn & Phòng trưng bày</span>
                          </li>
                        </ul>
                    </Grid>
                    <Grid item md={4}>
                        <p className={clsx(style.subTitle)}><span>Các câu hỏi thường gặp</span></p>
                        <ul className={clsx(style.supList)}>
                          <li className={clsx(style.supItem)}>  
                            <span className={clsx(style.supItemTitle)}>Tôi có cần tài khoản để đặt hàng không?</span> 
                          </li>
                          <li className={clsx(style.supItem)}>  
                            <span className={clsx(style.supItemTitle)}> Làm thế nào để tôi trả lại hoặc trao đổi?</span>
                          </li>
                          <li className={clsx(style.supItem)}>  
                            <span className={clsx(style.supItemTitle)}>bạn đã giao tới đất nước của tôi chưa?</span> 
                          </li>
                          <li className={clsx(style.supItem)}>  
                            <span className={clsx(style.supItemTitle)}>Chi phí giao hàng là bao nhiêu?</span> 
                          </li>
                        </ul>
                    </Grid>
                </Grid>
              </div>
              <li 
              className={clsx(style.categoryItem)}
              style={checkLogin?{color : 'red'}:{}}
              onClick={() => {
                setOverlay(true);
                elementAccount.current.classList.add(clsx(checkLogin?style.displaylogged:style.displayAccount))

                elementSupport.current.classList.remove(clsx(style.displaySup));
                elementCart.current.classList.remove(clsx(style.displayCartInf));
                elementNavbar.current.classList.add(clsx(style.navbarScroll));
              }}>
                {checkLogin?localStorage.customerName:"Tài khoản của tôi"}
              </li>
                {!checkLogin?
                <div ref={elementAccount} className={clsx(style.itemAccount)}>
                    <div className={clsx(style.accountTitle)}>
                      <p>Tạo tài khoản hoặc đăng nhập để xem đơn đặt hàng, trả lại hoặc điều chỉnh thông tin cá nhân của bạn.</p>
                    </div>
                    <div className={clsx(style.accountButton)}>
                      <button 
                      onClick={()=> {
                        setDisplayFormRegister(true);
                        elementAccount.current.classList.remove(clsx(style.displayAccount));
                        setZIndexNav(true);
                      }}
                      className={clsx(style.btnCreateAccount)}>
                          Create account
                      </button>
                      <button 
                      onClick={()=> {
                        setDisplayFormLogin(true)
                        elementAccount.current.classList.remove(clsx(style.displayAccount));
                        setZIndexNav(true);
                      }}
                      className={clsx(style.btnLogin)}>
                          <span>Login</span>
                          <KeyboardTabIcon className={clsx(style.btnIconArrow)}></KeyboardTabIcon>
                      </button>
                </div>
                </div>
                :
                <div ref={elementAccount} className={clsx(style.logged)} >
                  <ul>
                    <li>
                      <button>Chỉnh sửa thông tin cá nhân</button>
                    </li>
                    <li>
                      <button
                      onClick={() => {
                        setCheckLogin(false);
                        localStorage.clear();
                        setProductCarts([]);
                        setPriceProduct(0);
                        setOverlay(false);
                      }}
                      >Đăng xuất</button>
                    </li>
                  </ul>
                </div>  
              }
              <li 
                className={clsx(style.categoryItem ,style.categoryQuantity)}
                onClick={() => {
                  setOverlay(true);
                  elementCart.current.classList.add(clsx(style.displayCartInf));
                  elementAccount.current.classList.remove(checkLogin?style.displaylogged:style.displayAccount);
                  
                  elementSupport.current.classList.remove(clsx(style.displaySup));
                  elementNavbar.current.classList.add(clsx(style.navbarScroll));
                }}
              >
                <AddShoppingCartIcon className={clsx(style.itemCart)}/>
                <span className={clsx(style.itemQuantity)}>{productCarts.length}</span>
              </li>
              <div ref={elementCart} className={clsx(style.itemCartInf)}>
                {
                productCarts.length > 0?
                <div className={clsx(style.framesProduct)}>
                    {arrayProductCollapse.map((Data, currentIndex) => {
                        return (
                          <div className={clsx(style.itemCart)} key={currentIndex} >
                              <div className={clsx(style.imgProductCart)} >
                                <span>X{countsProduct.current[Data.id]}</span>
                                <img className={clsx(style.imgProduct)} src={Data.image} alt={Data.name}></img>
                              </div>
                              <ul className={clsx(style.listProduct)} >
                                <li className={clsx(style.itemProduct)} >{Data.name}</li>
                                <li className={clsx(style.itemProduct)} >{Data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</li>
                              </ul>
                              <div className={clsx(style.option)} >
                                <button 
                                className={clsx(style.optionDelete)}
                                onClick={() => {
                                  handleDeleteProduct(Data.id)
                                  setPriceProduct(priceProduct - (Data.price * countsProduct.current[Data.id]));
                                }}
                                >
                                  <DeleteIcon/>
                                </button>
                                <button 
                                onClick={() => {
                                  navigate('/PhoneShop-QTai/CartPage')
                                  setOverlay(false);
                                }} 
                                className={clsx(style.optionRepair)}
                                >Sửa</button>
                              </div>
                          </div>
                        )
                    })}
                </div>:<span className={clsx(style.noCart)} >Giỏ hàng của bạn trống</span>
                }
                <div className={clsx(style.cartPrice)}>
                  <span>Giá :</span>
                  <span>{priceProduct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                </div>
                <div className={clsx(style.cartCheckout)}>
                    <button onClick={() => {
                      navigate('/PhoneShop-QTai/CartPage')
                      setOverlay(false);
                    }} 
                    className={clsx(style.btnCheckout)}>Checkout</button>
                </div>
              </div>
          </ul>
        </div>
    </nav>        
    </Container>
  )
}

export default Navbar
