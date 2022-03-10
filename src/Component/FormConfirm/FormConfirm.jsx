import React from 'react'
import clsx from 'clsx'
import style from './FormConfirm.module.scss'
const FormConfirm = ({elementFormConfirm , displayFormConfirm}) => {
  return (
    <div ref={elementFormConfirm} className={clsx(style.formConfirm , {
        [style.active] : displayFormConfirm
    })} >
        hello
    </div>
  )
}

export default FormConfirm
