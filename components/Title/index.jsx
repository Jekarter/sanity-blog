import React from 'react'
import styles from './index.module.scss';
import cl from 'classnames'

const Title = ({children, className}) => {
  return (
    <div className={cl(className, styles.title)}>{children}</div>
  )
}

export default Title