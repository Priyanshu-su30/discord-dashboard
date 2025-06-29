import { Bell, CircleUser } from 'lucide-react'
import React from 'react'
import Switch from './ThemeToggle'

export default function Navbar() {
  const user = "Tony Stark"

  return (
    <>      
      <div className="px-5 md:px-10 py-3 w-full h-20 flex flex-row items-center rounded-2xl">

        <h1 className="text-sm md:text-2xl pl-6">
          Welcome Back, {user}!
        </h1>

        <div className="flex justify-end items-center gap-5 flex-1">
          <Switch/>
          <Bell className="hover:cursor-pointer size-6 md:size-8" />
          <CircleUser className="hover:cursor-pointer size-6 md:size-8 hidden md:block" />
        </div>
      </div>
    </>
  )
}
