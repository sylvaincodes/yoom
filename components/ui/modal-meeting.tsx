import React, { useState } from 'react'
import { ButtonLoading } from '@/components/ui/button-loading'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ModalMeeting = ({ children, isOpen, onClose, title, className, buttonText, handleClick, loading, setLoading }:
  {
    isOpen: boolean; onClose: () => void; title: string; className: string;
    buttonText: string; handleClick: any; setLoading: any; loading: boolean; children?: any
  }) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-dark-1 text-white border-0'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl capitalize'>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>

          <Button variant="default" className='w-full bg-primary-400 
            text-center text-white'
            onClick={handleClick}>
            {buttonText}
          </Button>

        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default ModalMeeting
