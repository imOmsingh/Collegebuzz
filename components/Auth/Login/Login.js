import Usercontext from '@/context/Usercontext/Usercontext';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const usercontext = useContext(Usercontext);
    const { user,setUser,setUserName,setId } = usercontext;


    const signIn  = async () =>{
console.log("rinninf")
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
    <div className={styles.section} >
    <div className={styles.loginBox}>
        <form action="#" name="loginForm">
            <h1 style={{color:"white"}}> Login</h1>
            <div className={styles.inputBox}> 
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" required/>
                {/* <label for="" >Email<ion-icon name="mail-outline"></ion-icon></label> */}
            </div>
             
            <div className={styles.inputBox}> 
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" required/>
                {/* <label for="" >Password<ion-icon name="lock-closed-outline"></ion-icon></label> */}
            </div>

            <div onClick={signIn} className={styles.button} form="login-form" ><span>LOGIN</span></div>
            <div onClick={()=>{router.push('/signup')}} className={styles.signin}>
                <p> New here? <a href="./signup.html">Create account</a></p>
            </div>
            
        </form>
    </div>
</div>
  )
}
