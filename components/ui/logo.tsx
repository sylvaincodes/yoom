import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div className='cursor-pointer xl:ps-8'>
      <Link href="/" className="flex w-full items-center gap-4">
        <Image src="/logo/logo.svg" alt='logo' width={40} height={40} />
        <h1 className="font-extrabold text-2xl text-white tracking-tight pt-1">YOOM</h1>
      </Link>
    </div>
  )
}
