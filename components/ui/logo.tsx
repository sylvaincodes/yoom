import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div className='cursor-pointer'>
    <Link href="/">
         <Image src="/logo/logo.svg" alt='logo' width={124} height={40} />
    </Link>
    </div>
  )
}
