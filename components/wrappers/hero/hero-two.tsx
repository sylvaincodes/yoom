"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useRouter } from "next/navigation";

export const HeroTwo = () => {

  const router = useRouter();
  return (
    <HeroHighlight className="min-h-screen justify-items-center items-center grid grid-cols-1 grid-rows-2 justify-items-center">

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.7, 0.0, 0.2, 1],
        }}
        className="text-2xl self-end leading-[44px] px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <span className="text-primary-400 font-extrabold">
          YOOM, &nbsp;
        </span>
        plateforme de messagerie instantanée et de vidéo-conférence
        <br />
        <Highlight className="text-black dark:text-white">
          la plus populaire.
        </Highlight>
      </motion.h1>

      <motion.div initial={{
        opacity: 0,
        y: 20,
      }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}>
        <button onClick={() => router.push('/home')} className="text-2xl inline-flex h-12 w-[320px] animate-shimmer items-center justify-center rounded-full px-20 py-8 bg-primary-400 text-white border-2 border-primary-400 hover:border-black hover:bg-white hover:bg-white hover:text-black transition-all  hover:scale-110 duration-400 hover:shadow-lg">
          Rejoindre
        </button>
      </motion.div>

    </HeroHighlight>
  );
}
