import DashboardCards from '@/Components/DashboardCards';
import React from 'react'

export default function Dashboard() {
    
  return (<>
    <div className='p-3 md:p-5 flex flex-col gap-4 border-solid rounded-lg border-amber-50'>
        <h1 className="text-sm md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">Server Dashboard</h1>
        <div className='h-1/4 flex p-3 md:p-5 justify-around rounded-2xl'>
            <div className="min-h-screen p-3 md:p-6">
                <DashboardCards />
            </div>
        </div>
    </div>
  
  </>
  )
}
