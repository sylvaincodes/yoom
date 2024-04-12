import React from 'react'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarOne } from '../sidebar/sidebar-one'


export const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="h-12 w-10 text-white cursor-pointer" />
            </SheetTrigger>
            <SheetContent className='p-inherit w-auto border-0 shadow-md shadow-white'>
                <SidebarOne />
            </SheetContent>
        </Sheet>
    )
}
