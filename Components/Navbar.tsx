import { Bell, CircleUser } from 'lucide-react'
import React from 'react'
import Switch from './ThemeToggle'

export default function Navbar() {
  const user = "Tony Stark"

  return (
    <>
      <div className='px-10 py-3 w-full h-20 flex justify-between items-center rounded-2xl'>
          <h1 className='text-2xl'>Welcome Back, {user}!</h1>
        <div className='flex justify-end items-center gap-7'>
            <Switch/>
            <Bell size={30} className='hover:cursor-pointer'/>
            <CircleUser size={30} className='hover:cursor-pointer'/>
        </div>
      </div>
    </>
  )
}
