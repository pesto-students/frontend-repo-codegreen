import React from 'react'
import styles from './Button.module.css'

function Button({ text , bgColor, size}) {
  return (
    <button className={styles.ggButton}>
        {text}
    </button>
  )
}

export default Button