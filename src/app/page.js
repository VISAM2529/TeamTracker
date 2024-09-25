import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MdOutlineCellTower } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
const page = () => {
    const tasks = [
        {
            id:0,
            img : "/sample.jpg",
            task_from : "Twilio",
            task : "WebApp Re-Design",
            user:"/dp.png"
        },
        {
            id:1,
            img : "/sample.jpg",
            task_from : "Accenture",
            task : "Add Backend",
            user:"/dp.png"
        },
        {
            id:0,
            img : "/sample.jpg",
            task_from : "TCS",
            task : "Develop FrontEnd",
            user:"/dp.png"
        },
        {
            id:0,
            img : "/sample.jpg",
            task_from : "Microsoft",
            task : "Add Database",
            user:"/dp.png"
        },
        {
            id:0,
            img : "/sample.jpg",
            task_from : "Amazon",
            task : "Fetch Data at Frontend",
            user:"/dp.png"
        },
    ]
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <div className='w-full flex items-center justify-between' >
            <h1 className='text-2xl  bg-[#f9f6ee] pl-5 pr-5 pt-3 pb-3 rounded-xl flex items-center gap-3'><MdOutlineCellTower />Welcome Sameer!</h1>
            <h1  className='flex items-center gap-2'><Image src="/dp.png" width={40} height={40} className='rounded-full'/><span className='flex flex-col items-start'><h1 className='text-lg'>gaikwadsameer422@gmail.com</h1><h1 className='text-sm '>Full Stack Developer</h1></span><MdMoreVert className='text-2xl'/></h1>
        </div>
        <div className='w-full h-full flex gap-5'>
            <div className='w-3/4 bg-white shadow-lg rounded-xl p-5 flex flex-col gap-10'>
                <h1 className='text-2xl font-extrabold '>Today's Tasks</h1>
                <div className='flex flex-col gap-5'>
                    {
                        tasks.map((task)=>{
                            return <div key={task.id} className='flex items-start gap-3 justify-between border-x-2 border-y-2 p-3 rounded-lg '>
                                <div className='flex items-start gap-3'>
                                <Image src={task.img} width={50} height={50} className='rounded-lg'/>
                                <div className='flex flex-col '>
                                <h1 className='text-xl'>{task.task_from}</h1>
                                <p className='text-sm'>{task.task}</p>
                                </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                <Image src={task.user} width={50} height={50} className='rounded-full'/>
                                <h1 className='text-2xl'><MdMoreVert/></h1>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='w-1/4  flex flex-col gap-5'>
                <div className='w-full h-2/3 shadow-lg rounded-xl p-5 flex flex-col items-start justify-between bg-white'>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-lg'>Ongoing Task</h1>
                        <h1 className='text-xl'><MdMoreVert/></h1>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>Twilio Web App Re-Design</h1>
                    </div>
                    <div className='flex items-center gap-3 w-full'>
                        <h1>50%</h1>
                        <div className='w-2/3 bg-gray-200 h-3 rounded-full'><div className='w-1/2 bg-green-500 h-full rounded-full'></div></div>
                    </div>
                </div>
                <div className='w-full h-1/4 shadow-lg rounded-xl flex flex-col items-center justify-between p-5 bg-white gap-3'>
                    <h1 className='text-4xl font-light'>Invite Team Members</h1>
                    <Link href="" className='border-x-2 border-y-2 border-slate-300 w-full text-center p-2 rounded-lg font-bold'>invite now</Link>
                </div>
                <div className='w-full h-2/3  rounded-xl bg-black p-5 flex flex-col items-center justify-between'>
                    <h1 className='text-4xl text-white'>Upgrade Your Membership</h1>
                    <Link href="" className='w-full bg-orange-500 text-white p-2 text-center font-bold rounded-lg'>Upgrade Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page