import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useUser } from '@clerk/nextjs'

export const EmailTemplate = ({ firstName }: { firstName: string }) => {

  const now = new Date();

  const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' })).format(now);


  return (
    // <section ClassName="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
    //   <header>
    //     <Link href="#">
    //       <Image ClassName="w-auto h-7 sm:h-8" src="/logo/logo.png" alt="logo" />
    //     </Link>
    //   </header>

    //   <main ClassName="mt-8">
    //     <h2 ClassName="text-gray-700 dark:text-gray-200">Hi {firstName},</h2>

    //     <p ClassName="mt-2 leading-loose text-gray-600 dark:text-gray-300">
    //       {useUser.firstName} vous a invité à rejoindre une réunion sur <span ClassName="font-semibold ">YOOM</span>.
    //     </p>

    //     <button ClassName="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    //       Accepter l&apos;invitation
    //     </button>

    //     <p ClassName="mt-8 text-gray-600 dark:text-gray-300">
    //       Merci, <br />
    //       Equipe YOOM
    //     </p>
    //   </main>


    //   <footer ClassName="mt-8">
    //     <p ClassName="text-gray-500 dark:text-gray-400">
    //       Cet couriel est envoyé à <a href="#" ClassName="text-blue-600 hover:underline dark:text-blue-400" target="_blank">contact@yoom.com</a>.
    //       Si vous souhaitez ne plus recevoir ce genre de couriel, vous pouvez <Link href="#" ClassName="text-blue-600 hover:underline dark:text-blue-400">vous désabonner</Link> ou <Link href="#" ClassName="text-blue-600 hover:underline dark:text-blue-400">gérer vos préférences</Link>.
    //     </p>

    //     <p ClassName="mt-3 text-gray-500 dark:text-gray-400">© {date} - {time} YOOM. Tous droits réservés.</p>
    //   </footer>
    // </section>
    <h1>hello</h1>
  );
}
