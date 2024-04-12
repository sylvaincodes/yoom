import { HeroTwo } from "@/components/wrappers/hero/hero-two";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";

export default function Page() {

  return (
    <HeroTwo/>
  )
}

export const metadata: Metadata = {
  title: "YOOM - Page marketing",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/logo/logo.png",
  },
  
  openGraph: mergeOpenGraph({
    title: 'Page marketing',
    url: '/',
  }),


};
