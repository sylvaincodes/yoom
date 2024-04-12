import { cn } from '@/lib/utils';
import React from 'react'

export const Col = ({children,className}: {children: React.ReactNode; className?: string}) => {
  return (
    <div className={cn('flex  flex-col ',className)}>{children}</div>
  )
}
