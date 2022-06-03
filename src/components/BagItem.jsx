import React from 'react'
import styles from './datastyle.module.css'

export const BagItem = ({ e }) => {
  console.log(e)
  return (
    <div className={styles.container}>

      <div className={styles.dabba}>
        <img src={e.imgurl} className={styles.user} />
        <div className={styles.city}>
          <h3>{e.name}</h3>
          <p>{e.city}</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>Professional level:{e.level}</p>
        <p>{e.points}points</p>
      </div>

    </div>
  )
}
