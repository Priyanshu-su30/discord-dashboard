import Button from '@/Components/Button';
import React from 'react'

export default function Dashboard() {
    const totalUsers = 592;
    const onlineUsers = 243;
    
  return (<>
    <div className='p-5 flex flex-col gap-4'>
        <div className='h-auto flex p-5 justify-around bg-cyan-900 rounded-2xl opacity-90 '>
            <div>
                <Button title={`Total Users: ${totalUsers}`}/>
            </div>
            <div>
                <Button title={`Total Users: ${onlineUsers}`}/>
            </div>
        </div>
        <div className='h-1/4 flex p-5 justify-around bg-cyan-900 rounded-2xl opacity-90 '>
            <div>
                <Button title={`Total Users: ${totalUsers}`}/>
            </div>
            <div>
                <Button title={`Total Users: ${onlineUsers}`}/>
            </div>
        </div>
        <div className='h-1/4 flex p-5 justify-around bg-cyan-900 rounded-2xl opacity-90 '>
            <div>
                <Button title={`Total Users: ${totalUsers}`}/>
            </div>
            <div>
                <Button title={`Total Users: ${onlineUsers}`}/>
            </div>
        </div>
        <div className='h-1/4 flex p-5 justify-around bg-cyan-900 rounded-2xl opacity-90 '>
            <div>
                <Button title={`Total Users: ${totalUsers}`}/>
            </div>
            <div>
                <Button title={`Total Users: ${onlineUsers}`}/>
            </div>
        </div>
        
    </div>
  
  </>
  )
}
