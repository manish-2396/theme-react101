import React from 'react'
import { BagItem } from './BagItem'
import styles from './datastyle.module.css'

const Bag = (props) => {
  return (
    <div className={styles.Box}>
        <div className={styles.header}>
           <p>Active user</p>
           <p>for jan 2022</p>
       </div>
        {props.data.map((e)=>(
            <BagItem e={e} key={e.level}/>
        ))}
    </div>
  )
}

export default Bag