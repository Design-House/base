import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div style={{textAlign: "center", marginTop: "40px"}}>
      <Link href="/">Home</Link>  |  <Link href="/about">About</Link>  |  <Link href="/product">Pordct</Link>  |  <Link href="/blog">Blog</Link>  |  <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Nav
