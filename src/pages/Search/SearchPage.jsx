import React , {useEffect , useRef , useState} from 'react'
import clsx from 'clsx'



import Products from '../../Component/Products/Products'
import Footer from '../../Component/Footer/Footer'
import ButtonFind from '../../Component/ButtonFind/ButtonFind'
import style from './SearchPage.module.scss'
import Datas from '../../Datas'
const SearchPage = ({PhonePopular , productCards , priceProduct , setPriceProduct , setProductCards}) => {
    const grid = {
        md : 6,
        sm : 12,
        xs : 12
    }
    // const elementInput = useRef();
    const [arrProductsFilter , setArrProductsFilter ] = useState();
    const [nameFilter , setNameFilter] = useState("iphone");
    useEffect(() => {
      setArrProductsFilter(Datas.filter((Data , index) => {
        return Data.theloai === nameFilter;
      })) 
    },[nameFilter])
    // console.log(arrProductsFilter);
    return (
    <>
      <div className={clsx(style.searchPage)} >
          <div className={clsx(style.products)}>
              <Products
                PhonePopular={PhonePopular}  
                productCards={productCards}
                priceProduct= {priceProduct}
                setPriceProduct= {setPriceProduct}
                setProductCards={setProductCards}
                grid = {grid}
                arrProductsFilter={arrProductsFilter}
                />
                <Footer></Footer>
          </div>
          <div className={clsx(style.itemSearch)} >
            <div className={clsx(style.trademark)} >
                <p className={clsx(style.trademarkTitle)}>Chọn hãng điện thoại</p>
               <form className={clsx(style.form)} >
                <div className={clsx(style.itemInput)} >
                    <input className={clsx(style.input)} onChange={(e) => { setNameFilter(e.target.value) }} name="Phone"  id="apple"  type="radio"  value="iphone" ></input>
                    <label className={clsx(style.label)}  htmlFor="apple" >Iphone</label>
                </div>
                <div className={clsx(style.itemInput)} >
                    <input className={clsx(style.input)}  onChange={(e) => { setNameFilter(e.target.value) }}  name="Phone" id="pixel"  type="radio" value="pixel"></input>
                    <label className={clsx(style.label)}  htmlFor="pixel" >Pixel</label>
                </div>
                <div className={clsx(style.itemInput)} >
                    <input className={clsx(style.input)} onChange={(e) => { setNameFilter(e.target.value) }}  name="Phone" id="samsung" type="radio" value="samsung"></input>
                    <label className={clsx(style.label)}  htmlFor="samsung" >Samsung</label>
                </div>
                <div className={clsx(style.itemInput)} >
                    <input className={clsx(style.input)} onChange={(e) => { setNameFilter(e.target.value) }}  name="Phone" id="oppo" type="radio" value="oppo"></input>
                    <label className={clsx(style.label)}  htmlFor="oppo" >Oppo</label>
                </div>
               </form>
            </div>
          </div>
    </div>
      <ButtonFind/>
    </>
  )
}

export default SearchPage
