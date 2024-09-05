'use client'
import React, { useState } from 'react'
const Body = () => {
    const [change, setChange] = useState(false);

    const handleChange = () => {
        setChange(!change);
    }
  return (
    <div className='flex items-center justify-center'>
        <div className={`border p-2 m-5 ${ change ? 'bg-red-500' : 'bg-blue-500'}`}>noob</div>
        <button onClick={handleChange}>change</button>
    </div>
  )
}

export default Body