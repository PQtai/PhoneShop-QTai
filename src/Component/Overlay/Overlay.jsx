import React from 'react'
import clsx from 'clsx'
import style from './Overlay.module.scss'
const Overlay = ({ 
    elementOverlay,
    cursor,
    overlay,
    setOverlay,
    setDisplayFormConfirm,
    setDisplayFormRegister,
    displayFormRegister,
    setDisplayFormLogin,
    displayFormConfirm
    }) => {
  return (
    <div
    ref={elementOverlay}
    style={
      displayFormConfirm?
      {zIndex : "20" ,cursor : `url(${cursor}) 20 20,default`}
      :{cursor : `url(${cursor}) 20 20,default` }
    }
    className={clsx(style.categoryOverlay , {
      [style.active] : overlay
    })}
    onClick={() => {
      setDisplayFormConfirm(false);
      setOverlay(false);
      displayFormRegister?setDisplayFormRegister(false):setDisplayFormLogin(false);
    }}>
    </div>
  )
}

export default Overlay
