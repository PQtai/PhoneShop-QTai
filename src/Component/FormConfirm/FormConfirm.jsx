import React from 'react'
import clsx from 'clsx'
import style from './FormConfirm.module.scss'
const FormConfirm = ({
  elementFormConfirm , 
  displayFormConfirm,
  infoProduct,
  setOverlay,
  setDisplayFormConfirm
}) => {
  return (
    <div ref={elementFormConfirm}
    className={clsx(style.formConfirm , {
        [style.active] : displayFormConfirm
    })} >
        <h4 className={clsx(style.nameProduct)} >{infoProduct.name}</h4>
        <div className={clsx(style.decription)} >
            <div 
            className={clsx(style.img)}
            style={{ backgroundImage: "url("+infoProduct.image+")"}}
            ></div>
            <div className={clsx(style.info)} >
              <ul>
                <li>{infoProduct.ram+"/"+ infoProduct.memory}</li>
                <li>8gb/256gb</li>
                <li>6gb/128gb</li>
                <li>12gb/512gb</li>
              </ul>
              <p><span>Áp dụng mã giảm giá</span> & <span>Xem giảm giá của sản phẩm.</span></p>
            </div>
        </div>
        <div className={clsx(style.itemOutstanding)}>Màu sắc
              <span style={infoProduct.color === "Vàng"?{border : "2px solid red"}:{}} className={clsx(style.itemColor)} ></span>
              <span style={infoProduct.color === "Xanh"?{border : "2px solid red"}:{}} className={clsx(style.itemColor)} ></span>
              <span style={infoProduct.color === "Đen"?{border : "2px solid red"}:{}} className={clsx(style.itemColor)} ></span>
              <span style={infoProduct.color === "Trắng"?{border : "2px solid red"}:{}} className={clsx(style.itemColor)} ></span>
        </div>
        <div className={clsx(style.control)} >
          <button 
          onClick={() => {
            setOverlay(false);
            setDisplayFormConfirm(false);
          }}
          className={clsx(style.btn , style.btnCancel)} 
          >Huỷ</button>
          <button className={clsx(style.btn , style.btnConfirm)}>Xác nhận</button>
        </div>
    </div>
  )
}

export default FormConfirm
