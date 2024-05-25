import React from 'react'
import styles from './Button.module.css'


function Button({ text , bgColor, color,  isFullWidth, icon}) {
  return (
    <button className={styles.ggButton} style={{
      width: isFullWidth ? '100%' : 'auto',
      color : color ? color : 'auto',
      backgroundColor : bgColor ? bgColor : '#e48c3c',
                  
    }}>
        {text} {icon && <img src={icon}/>}
    </button>
  )
}

export default Button