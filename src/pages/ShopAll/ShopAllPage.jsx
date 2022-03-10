import style from './ShopAllPage.module.scss'
import Products from '../../Component/Products/Products'
import Datas from '../../Datas'
import Notification from '../../Component/Notification/Notification'


import clsx from 'clsx'
import React , {useEffect , useState , useRef} from 'react'
const ShopAllPage = ( {
  productCards , 
  setProductCards , 
  priceProduct , 
  setPriceProduct,
  scrollToTop,
  Link,
  setIdInfoProduct
  } ) => {
    
    const elementnavigateSearch = useRef();
    const elementFindBtn = useRef();
    const elementGridBtn = useRef();
    const elementSearch = useRef();
    const elementNotification = useRef();
    const [arrPhoneCompany,setArrPhoneCompany] = useState([]);
    const isSuccess = useRef(false);
    const [arrProductsFilter , setArrProductsFilter] = useState();
    const [nameFilter , setNameFilter] = useState();

    
  const handleArrPhoneCompany = () => {
    const arr = [];
    Datas.forEach((data , index) => { 
      if(!arr.includes(data.theloai)){
        arr.push(data.theloai);
      }
    })
    setArrPhoneCompany(arr);
  }
useEffect(() => {
  let timerId;
  if(isSuccess.current){
    elementNotification.current.style.transform = 'translateX(40px)';
    timerId = setTimeout(() => {
        elementNotification.current.style.transform = 'translateX(-100%)';
    },[1000]);
  }
return () => {
    clearTimeout(timerId);
}
},[productCards]);
useEffect(() => {
    if(nameFilter){
      setArrProductsFilter(
        Datas.filter((data , index)=> {
          return data.theloai === nameFilter
        })
      )
    }
},[nameFilter])
  return (
    <div className={clsx(style.shopAll)} >
     <div className={clsx(style.products)} >
      <Products
          productCards={productCards}
          setProductCards={setProductCards}
          priceProduct={priceProduct}
          setPriceProduct={setPriceProduct}
          isSuccess = {isSuccess}
          arrProductsFilter ={arrProductsFilter}
          Link ={Link}
          setIdInfoProduct={setIdInfoProduct}
        ></Products>
     </div>
      <div ref={elementnavigateSearch} className={clsx(style.navigateSearch)}>
            <div ref={elementSearch} className={clsx(style.search)} >
              <h2>Tìm kiếm</h2>
              <ul className={clsx(style.listSearch)} >
                  { arrPhoneCompany.map((company , index) => {
                    return (
                        <li 
                        key={index}
                        onClick={() => {
                          scrollToTop()
                          setNameFilter(company)
                        }}
                        className={clsx(style.listItem)} 
                        >
                            <input name="phones" id={company} type="radio" />
                            <label htmlFor={company}>{company}</label>
                        </li>
                    )
                  })}
              </ul>
            </div>
      </div>
      <div className={style.FindProduct} >
        <button 
        ref={elementFindBtn}
        className={clsx(style.btn , style.btnActive)}
        onClick={(e) => {
          elementGridBtn.current.classList.remove(clsx(style.btnActive));
          e.target.classList.add(clsx(style.btnActive))
          elementSearch.current.style.transform = `translateX(100%)`;
          elementnavigateSearch.current.style.width = '0';
        }}
        >Tất cả</button>
        <button 
        ref={elementGridBtn}
        className={clsx(style.btn)}
        onClick={(e) => {
          handleArrPhoneCompany();
          elementFindBtn.current.classList.remove(clsx(style.btnActive));
          e.target.classList.add(clsx(style.btnActive));
          elementSearch.current.style.transform = `translateX(-50px)`;
          elementnavigateSearch.current.style.width = '16%';
        }}
        >Lọc</button>
      </div>
      <Notification elementNotification={elementNotification} ></Notification>  
    </div>
  )
}

export default ShopAllPage
