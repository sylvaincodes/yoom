import { Container } from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-4">
    <Container>
    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
    <div>
    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Une seule plateforme pour entrer en contact</p>
    <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 s:text-6xl 
    xl:text-8xl">YOOM : Appel en ligne et chat gratuit</h1>
    <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
    service vidéo à distance.</p>
    
    <Link href="/sign-up" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
    Rejoindre
    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    </Link>
    
    <p className="mt-5 text-gray-600">Déja inscrit? <a 
    href="sign-in" title="" 
    className="text-black transition-all duration-200 hover:underline">Se connecter</a></p>
    </div>
    
    <div>
    <Image className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="hero" width="1000" height="1000" />
    </div>
    </div>
    </Container>
    </section>
  )
}
