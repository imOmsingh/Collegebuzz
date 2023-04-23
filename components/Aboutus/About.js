import Link from 'next/link'
import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
    <div className={styles.about}>
        <div className={styles.innerSection}>
            <h1>ABOUT US</h1>
            <p className={styles.text}>
                College Buzz collaborates with colleges to provide students with easy access to various events and resources. It aims to facilitate student engagement and promote a positive college experience. Through the platform, students can join in various events, gain access to resources such as study materials. The website aims to create a vibrant college community and support students in achieving their academic and personal goals.
            </p>
            <Link href='/'><div className={styles.button}> Back To The Future
            </div></Link>
        </div>
    </div>
  )
}
