import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link'

const page = () => {
  return (
    
      <main className={styles.main}>
      

      <div className={styles.center}>
        <h1>Porduct Page</h1>
      </div>

      <ul style={{listStyle:"none"}}>
        <li><Link href="/product/iphone">Product 01 - Iphone</Link></li>
        <li><Link href="/product/ipad">Product 02 - Ipad</Link></li>
        <li><Link href="/product/imac">Product 03 - Imac</Link></li>
        <li><Link href="/product/ipod">Product 04 - Ipod</Link></li>
      </ul>
    </main>
   
  )
}

export default page
