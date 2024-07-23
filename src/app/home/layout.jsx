import React from 'react'
import Sidebar from './sidebar'
const layout = ({children}) => {
  return (
    <div className='flex w-full h-screen bg-[#f9f6ee] '>
        <div className='w-1/5 h-full pt-10'>
        <Sidebar/>
        </div>
        <div className='w-full h-full p-5'>
        <div className='w-full h-full bg-[#f2edde] p-5 rounded-2xl'>
        {children}
        </div>
        </div>
    </div>
  )
}

export default layout