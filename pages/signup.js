import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Usercontext from '@/context/Usercontext/Usercontext';
export default function signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const router = useRouter();

    const usercontext = useContext(Usercontext);
    const { user,setUser,setUserName } = usercontext;


    const signIn  = async () =>{

        try {
            const res = await axios.post('/api/user/signup',{
                name,
                email,
                password,
                college:'644427515402ad1ec87dc3f1'
            })
            setUser(true)
            setUserName(name)
            router.push('/')
            
        } catch (error) {
            console.log(error)
            
        }

        


    }
    

  return (
    <>
        <div>Name</div>
        <input onChange={(e)=>{setName(e.target.value) }} />
        <div>Email</div>
        <input onChange={(e)=>{ setEmail(e.target.value) }} />
        <div>Password</div>
        <input onChange={(e)=>{ setPassword(e.target.value) }} />
        <button onClick={signIn}>Signin</button>
    </>
  )
}
