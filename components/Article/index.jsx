import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames'

const Article = ({children, className}) => {
  return (
    <div className={cl(className, styles.article)}>{children}</div>
  )
}

export default Article