import { cn } from '@/lib/utils';
import React from 'react'

export const Row = ({children,className}: {children: React.ReactNode; className?: string}) => {
  return (
    <div className={cn('flex items-center',className)}>{children}</div>
  )
}
