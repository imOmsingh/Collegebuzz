import React from 'react'
import styles from './Login.module.css'
export default function Login() {
  return (
    <div className={styles.section} >
    <div className={styles.loginBox}>
        <form action="#" name="loginForm">
            <h1 style={{color:"white"}}> Login</h1>
            <div className={styles.inputBox}> 
                <input type="email" placeholder="" required/>
                <label for="" >Email<ion-icon name="mail-outline"></ion-icon></label>
            </div>
             
            <div className={styles.inputBox}> 
                <input type="password" placeholder="" required/>
                <label for="" >Password<ion-icon name="lock-closed-outline"></ion-icon></label>
            </div>

            <a href="navbar.html"><div className={styles.button} form="login-form" ><span>LOGIN</span></div></a>
            <div className={styles.signin}>
                <p> New here? <a href="./signup.html">Create account</a></p>
            </div>
            
        </form>
    </div>
</div>
  )
}
