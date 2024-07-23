import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { PiVideoFill } from "react-icons/pi";
import { RiSettingsFill } from "react-icons/ri";
const sidebar = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full h-full '>
        <div className='w-full h-2/3 flex flex-col items-center gap-10'>
        <Link href="/" className='text-2xl font-extrabold '>T e a m T r a c k e r</Link>
        <div className='flex flex-col items-start gap-5 w-full '>
        <Link href="/home" className='w-full flex items-center gap-3 text-2xl hover:bg-[#f2edde] pl-10 pr-10 pt-3 pb-3 rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-150'><BiSolidDashboard/>Dashboard</Link>
        <Link href="" className='w-full flex items-center gap-3 text-2xl hover:bg-[#f2edde] pl-10 pr-10 pt-3 pb-3 rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-150'><MdOutlineWork />Your Work</Link>
        <Link href="" className='w-full flex items-center gap-3 text-2xl hover:bg-[#f2edde] pl-10 pr-10 pt-3 pb-3 rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-150'><HiMiniChatBubbleLeftRight />Chat</Link>
        <Link href="" className='w-full flex items-center gap-3 text-2xl hover:bg-[#f2edde] pl-10 pr-10 pt-3 pb-3 rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-150'><PiVideoFill />Meet</Link>
        <Link href="" className='w-full flex items-center gap-3 text-2xl hover:bg-[#f2edde] pl-10 pr-10 pt-3 pb-3 rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-150'><RiSettingsFill />Settings</Link>
        </div>
        </div>
        <div className=' w-full p-5 flex flex-col gap-3 '>
            <hr className='w-full'/>
            <div className='flex items-start gap-3 '>
                <Image src="/dp.png" width={50} height={50} className='rounded-full'/>
                <div className='flex flex-col items-start gap-1'>
                <h1 className='text-lg'>Sameer Gaikwad</h1>
                <Link href="" className='text-sm'>LogOut</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sidebar