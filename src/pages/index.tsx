'use client'
import Head from 'next/head'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState<any[]>([])

  const fetchData = async () => {
    const res = await fetch('https://api-shop-lks2.onrender.com/api/users?limit=10&page=1&order=created%20asc', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWZjM2E2MDFmYzQ4MzcwMWExMmYxYiIsInBlcm1pc3Npb25zIjpbIkFETUlOLkdSQU5URUQiXSwiaWF0IjoxNzM2MzMzMzE4LCJleHAiOjE3Mzg5MjUzMTh9.A68yObK8JEKGPq68Sw9w2O1rvE0aEKWo03x-xEI3AIU'
      }
    })
    if (res.status === 401) {
      console.error('Unauthorized')
      return
    }
    const data = await res.json()
    console.log(data.data.users)
    setUsers([...users, ...data.data.users])
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Lập trình thật dễ</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Button variant='contained'>Hello world</Button>
      <ul>
        {users.map((user: any) => (
          <li key={user._id}>{user.email}</li>
        ))}
      </ul>
    </>
  )
}
