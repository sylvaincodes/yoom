import "./globals.css";
import '@/components/ui/seo'
import { ibm } from "./fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";


//SEO GLOBAL
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ||  'http://localhost:3000/'),
  applicationName:'YOOM app',
  keywords:['nextjs','zoom','video','netlify','yoom','sylvaincodes'],
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
    icon:"/logo/logo.png",
    shortcut:"/logo/logo.png",
    apple:"/logo/logo.png"
  },

  twitter:{
    card:'summary_large_image',
    title: 'YOOM Web app',
    description: 'YOOM App : Plateforme web gratuite de service de vidéo conférence pour les particuliers et les entreprises.',
    siteId:'',
    creator:'sylvaincodes',
    images:[` ${process.env.NEXT_PUBLIC_SERVER_URL}/logo/logo.png`]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn('animate-loading-transition min-h-screen overflow-hidden', ibm.className)} >

        {children}

      </body>
    </html>
  );
}
