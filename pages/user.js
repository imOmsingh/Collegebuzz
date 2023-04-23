import Navbar from '@/components/Navbar/Navbar'
import Profile from '@/components/User/Profile'
import Usercontext from '@/context/Usercontext/Usercontext'
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'

export default function user() {
const router = useRouter();
  const usercontext = useContext(Usercontext);
  const {user} = usercontext;
  
  

  useEffect(() => {
    if(!user){
      router.push('/')
    }
  }, [])
  
  
  return (

    <div>
         <Navbar/>
        <Profile/>
    </div>
  )
}
