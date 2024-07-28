import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <>
    <ul className='nav'>
        <li>
            <Link href="/">Home</Link>            
        </li>
        <li>
            <Link href="/about">About</Link>            
            <ul>
                <li>
                    <Link href="/about/mission">Mission</Link>
                </li>
                <li>
                    <Link href="/about/vision">Vision</Link>
                </li>
            </ul>
        </li>
        <li>
            <Link href='/blogs'>Blogs</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>            
        </li>
    </ul>
    </>
    
  )
}

export default Header