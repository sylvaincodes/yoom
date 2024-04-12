"use client"
import { Container } from '@/components/ui/container'
import { Col } from '@/components/ui/col'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from "next/navigation";
import { sidebar } from '@/constants/index'

export const SidebarOne = ({className}: {className?: string}) => {

  const pathname = usePathname();
  const router = useRouter();

  const handleclick = (link: string) => {
    router.push(link, {
    });
  }

  return (
    <aside className={cn('min-h-screen bg-dark-2 text-white pt-28 w-[264px] text-white', className)}>
      <Container>
        <Col className='gap-[16px]'>
          {
            sidebar.map((item, idx) => {
              return <Button onClick={() => handleclick(item.route)} key={idx} className={cn('p-6 transition duration-400 ease-in-out hover:bg-primary-400 hover:duration-700 flex justify-start capitalize rounded-[4px] overflow-hidden  w-full ', item.route === pathname ? 'bg-primary-400' : "bg-transparent")}>
                <Image src={item.url} className="mr-4 h-4 w-4 text-white" width="24" height="24" alt="home" />
                <span className='text-[16px] font-[100]'>
                  {item.label}
                </span>
              </Button>
            })
          }
        </Col>
      </Container>
    </aside>
  )
}
