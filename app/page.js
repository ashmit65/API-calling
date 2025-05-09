"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = () => {
  const[users, setusers] = useState([])
  const getUsers = async()=> {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)  
  }
  useEffect(() => {
    getUsers()
  },[])
  return (
    <>
    <button onClick={getUsers} className='cursor-pointer bg-green-700 text-white px-4 py-2 rounded font-bold transition active:scale-95 '>Get Data</button>
    <div className='p-8 bg-slate-100 mt-5'>
      <ul>
      {users.map((e) => {
         return <li>{e.username}--- <a href={`/${e.id}`}>Exlore</a></li>
      })}
      </ul>
    </div>
    </>
  )
}

export default page
