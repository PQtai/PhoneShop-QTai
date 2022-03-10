import React from 'react'
import clsx from 'clsx'
import style from './Overlay.module.scss'
import FormConfirm from '../FormConfirm/FormConfirm'
const Overlay = ({ 
    elementOverlay,
    setOverlay,
    cursor,
    overlay,
    setDisplayFormConfirm,
    elementFormConfirm,
    displayFormConfirm}) => {
  return (
    <div
    ref={elementOverlay} 
    className={clsx(style.categoryOverlay , {
      [style.active] : overlay
    })}
    onClick={() => {
        setOverlay(false);
        setDisplayFormConfirm(false);
    }}
    style={{cursor : `url(${cursor}) 20 20,default`}}>
      <FormConfirm
      elementFormConfirm={elementFormConfirm}
      displayFormConfirm={displayFormConfirm}
      />
    </div>
  )
}

export default Overlay
