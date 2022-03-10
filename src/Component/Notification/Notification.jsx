import React from 'react'
import style from './Notification.module.scss'
import clsx from 'clsx'
const Notification = ({elementNotification}) => {
  return (
    <div ref={elementNotification} className={clsx(style.notification)} >
            Successful
    </div>
  )
}

export default Notification
