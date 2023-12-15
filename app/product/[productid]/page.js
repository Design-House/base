import React from 'react'
import styles from '../../page.module.css'

const page = ({params}) => {
  return (
    
      <main className={styles.main}>
      

      <div className={styles.center}>
        <h1>Product ID {params.productid} ** Page</h1>
      </div>

      
    </main>
   
  )
}

export default page
