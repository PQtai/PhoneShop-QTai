import React , {useEffect} from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

import clsx from 'clsx'
import style from './CartPage.module.scss'
const CartPage = ({
  countsProduct , 
  arrayProductCollapse , 
  setArrayProductCollapse,
  priceProduct,
  setPriceProduct,
  handleDeleteProduct,
  productCarts,
  setProductCarts
}) => {

  useEffect(() => {
     window.scrollTo(0, 0)
  },[])

  const reduceNumberProduct = (product) => {
    let dem = 0;
    for(var i in productCarts){
      if(productCarts[i] === product){
        dem++;
      }
    }
    if(dem > 1){
      return true;
    }else {
      return false;
    }
  }
  return (
    <div className={clsx(style.cartBody)} >
        <h3>Giỏ hàng của bạn</h3>
        <div className={clsx(style.cart)}>
          <div className={clsx(style.title)} >
            <div className={clsx(style.linkReturn)} >
              Tiếp tục mua sắm
            </div>
            <ul className={clsx(style.listProducts)} >
              <li className={clsx(style.itemTitle)}>
                <div className={clsx(style.nameTitle , style.nameProduct)} >Product</div>
                <div className={clsx(style.nameTitle)} >Color</div>
                <div className={clsx(style.nameTitle)} >Memory</div>
                <div className={clsx(style.nameTitle)} >Số lượng</div>
                <div className={clsx(style.nameTitle , style.priceProduct)}>Giá</div>
              </li>
              {arrayProductCollapse.map((productCollapse, index) => {
                return (
                  <li key={index} className={clsx(style.itemTitle,style.itemProduct)}>
                    <div className={clsx(style.productInfo , style.nameProduct)} >
                        <img alt={"ảnh sản phẩm"} className={style.imgProduct} src={productCollapse.image} ></img>
                        <span className={clsx(style.namePhone)} >{productCollapse.name}</span>
                    </div>
                    <div className={clsx(style.productInfo)} >{productCollapse.color}</div>
                    <div className={clsx(style.productInfo)} >{productCollapse.memory}</div>
                    <div className={clsx(style.productInfo)} >
                      x{countsProduct.current[productCollapse.id]}
                      <div className={clsx(style.handleQuantity)}>
                        <button className={clsx(style.btn , style.btnUp)}
                        onClick={() => {
                            setProductCarts(productCarts.concat([productCollapse]));
                            setPriceProduct( priceProduct + productCollapse.price)
                        }}
                        >
                          <KeyboardArrowUpIcon/>
                        </button >
                        <button className={clsx(style.btn , style.btndown)}
                        onClick={() => {
                          if(reduceNumberProduct(productCollapse)){
                            const index = productCarts.lastIndexOf(productCollapse)
                            console.log(index);
                            const arr =  productCarts.filter((productCart , indexProduct) => {
                                  return index !== indexProduct;
                            })
                            setProductCarts(arr)
                            setPriceProduct( priceProduct - productCollapse.price);
                          }
                        }}
                        >
                          <KeyboardArrowDownIcon/>
                        </button>
                      </div>
                      <button className={clsx(style.btnDelete)}
                      onClick={() => {
                        if( window.confirm('Are you sure you wish to delete this item?')){
                          handleDeleteProduct(productCollapse.id)
                          setPriceProduct(priceProduct - (productCollapse.price * countsProduct.current[productCollapse.id]));
                        }
                      }}
                      >
                        <DeleteIcon/>
                      </button>
                      </div>
                    <div className={clsx(style.productInfo , style.priceProduct)}>{(productCollapse.price * countsProduct.current[productCollapse.id]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={clsx(style.checkout)} >
              <div className={clsx(style.price)}>
                <span>Giá :</span>
                <span>{priceProduct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
              </div>
              <button className={clsx(style.btnCheckout)} >
                  check out
              </button>
          </div>
        </div>
    </div>
  )
}

export default CartPage
