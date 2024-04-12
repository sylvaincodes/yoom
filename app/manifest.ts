import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YOOM App',
    short_name: 'yoom',
    description: "Plateforme web gratuite de conférence vidéo pour les particuliers et les entreprises.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/logo/logo.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
  }
}