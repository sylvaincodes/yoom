import Image from 'next/image'
import React from 'react'


export const AvatarCircle = ({items}: {items: Array<any>}) => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
    {
      items.slice(0,4).map((item,idx)=>{
return <Image key={idx} className="w-10 h-10 hover:border-2 cursor-pointer border-white rounded-full dark:border-gray-800" src={item.image} width="60" height="60" alt=""/>
      })
    }
    <span className="flex items-center justify-center text-sm  w-10 h-10 text-white hover:border-2 cursor-pointer bg-secondary-400 rounded-full dark:border-gray-800">+ {items.slice(4).length}</span>
    </div>
  )
}
