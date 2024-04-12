import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { Row } from '@/components/ui/row'
import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'
import { MobileMenu } from './mobile-menu'

export const HeaderOne = () => {
  return (
    <header className="fixed top-0 bg-dark-2 w-full h-[72px]">
      <Container className='xl:p-inherit'>
        <Row className='justify-between h-full'>

          <Logo />

          <div className='ms-auto me-8'>
            <UserButton afterSignOutUrl='/' />
          </div>

          <div className='md:hidden'>
            <MobileMenu />
          </div>

        </Row>
      </Container>
    </header>
  )
}
