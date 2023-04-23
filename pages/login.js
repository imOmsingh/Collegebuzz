import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Usercontext from '@/context/Usercontext/Usercontext';

export default function login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const usercontext = useContext(Usercontext);
    const { user,setUser,setUserName,setId } = usercontext;


    const signIn  = async () =>{

        try {
            const res = await axios.get('/api/user/login',{
                params:{
                    email,
                    password,
                }
                
            })
            setUser(true)
            setUserName(res.data.user[0].name)
            setId(res.data.user[0]._id)
            console.log(res)
            router.push('/')
            
        } catch (error) {
            console.log(error)
            
        }

        


    }

  return (
    <>
        <div>Email</div>
        <input onChange={(e)=>{ setEmail(e.target.value) }} />
        <div>Password</div>
        <input onChange={(e)=>{ setPassword(e.target.value) }} />
        <button onClick={signIn}>Signin</button>
    </>
  )
}
