"use client"
import React, { useState } from 'react'


const page = () => {
    const [prompt, setPrompt] = useState("");

    const [output,setOutput]=useState([])
    const handleChangeBtn = (e)=>{
        setPrompt(e.target.value)
    }
    const handleGenerateBtn = async () => {
        try {
          const response = await fetch('/api/generate-content', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
          });
          const data = await response.json();
          if (data.result) {
            setPrompt("")
            setOutput([...output,data.result.response.candidates[0].content.parts[0].text]);
          }
        } catch (error) {
          console.error('Error generating content:', error);
        }
      };
   console.log(output)
  return (
    <div className='w-full h-full flex flex-col-reverse'>
        <div className='w-full flex items-center justify-between gap-5'>
        <input onChange={handleChangeBtn} className='w-3/4 pt-3 pb-3 pl-10  rounded-full bg-white outline-none ' placeholder='Explore anything...' value={prompt}/>
        <button onClick={handleGenerateBtn}  className='bg-black w-1/4 p-3 text-white rounded-xl'>E x p l o r e</button>
        </div>
        <div className='p-5 flex flex-col gap-5'>
            {
                output?.map((res)=>{
                    return <h1 className='shadow-lg bg-white p-5 rounded-lg'>{res}</h1>
                })
            }
        </div>
    </div>
  )
}

export default page