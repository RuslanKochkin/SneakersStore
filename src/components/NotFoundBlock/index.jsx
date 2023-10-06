import React from 'react'

import styles from './NotFount.module.scss'



const NotFoundBlock= () => {
  return (
    <div className={styles.root}>
        <h3>
            <span>😕</span>
            <br/>
            Nothing found
        </h3>
        <p className={styles.description}>Unfortunately nothing was found</p>
    </div>
  )
}
export default NotFoundBlock;