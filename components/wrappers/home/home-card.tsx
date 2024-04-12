"use client"
import React from 'react'
import { Button } from '@/components/ui/button'

export const HomeCard = () => {

  const now = new Date();

  const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' })).format(now);

  return (
    <div className="w-full h-full bg-[url('/images/card_bg.jpg')] 
    bg-cover rounded-lg p-12">

      <div className='flex flex-col justify-between gap-1 items-center md:items-start h-full'>

        <Button className='bg-dark-2 text-white w-fit text-sm font-normal' >Heure normal UTC+1</Button>
        <div className="flex flex-col gap-2 h-full mt-auto items-center md:items-start justify-end">
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold text-white'>{time}</h1>
          <p className='text-sky-200 text-base lg:text-[24px] capitalize'>{date}</p>
        </div>

      </div>
    </div>
  )
}
