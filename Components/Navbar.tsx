import { Bell, CircleUser } from 'lucide-react'
import React from 'react'
import Switch from './ThemeToggle'

export default function Navbar() {
  return (
    <>
        <div className='bg-blue-900 rounded-2xl'>
            <div className='flex w-screen h-20 items-center justify-end pr-12 gap-5'>
                <Bell size={30} className='hover:cursor-pointer'/>
                <CircleUser size={30} className='hover:cursor-pointer'/>
                <Switch/>
            </div>
        </div>
    </>
  )
}
