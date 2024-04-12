import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';

//SEO GLOBAL
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ||  'http://localhost:3000/'),
    applicationName:'zoom',
    keywords:['nextjs','zoom','live','netlify'],
    authors: [{ name:'sylvaincodes',url:'https://sylvaincodes.vercel.app' }],
    publisher:'netlify',
  
    alternates:{
      canonical:'/',
      languages:{
        'fr':'fr'
      }
    },
  
    robots:{
      index:false,
      follow:true,
      nocache:true,
      googleBot:{
        index:true,
        noimageindex:false
      }
    },
  
    manifest: `  ${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.json`,
  
    icons:{
      icon:'/favicon.ico',
      shortcut:'/favicon.ico',
      apple:'/favicon.ico'
    },
  
    twitter:{
      card:'summary_large_image',
      title: 'Zoom',
      description: 'Plateforme de streaming live',
      siteId:'',
      creator:'sylvaincodes',
      images:[` ${process.env.NEXT_PUBLIC_SERVER_URL}/images/og.jpg`]
    },
  
  
  openGraph: mergeOpenGraph()
  
};
