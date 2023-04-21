import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.css'
import college from './gdsc.webp'
import logo from './gdsc.png'

export default function Hero() {
  return (
    <>
    <div className={styles.topCont}>
    <div className={styles.imageCont}>
        <div className={styles.mask}></div>
        <Image src={college} style={{objectFit:'cover'}} layout={'fill'} />
    </div>
    <div className={styles.detailsCont}>
        {/* <div className={styles.logoCont}>
            <Image src={logo} style={{objectFit:'contain'}} layout={'fill'} />
        </div> */}
        <h1 className={styles.mainHead}>Google Developer Student Clubs</h1>
        <h4 className={styles.details}>
                Google Developer Student Club is a university-based
                community group for students who are interested in technology,
                especially technology from Google. Google Developer Student is a
                place to grow as a developer, starting from a beginner developer to
                an advanced developer. Google Developer Student Club is not always
                about “programming” but also about connecting, learning together
                and growing together.
        </h4>
        <div className={styles.details}>
            <a className={styles.singleDetail} href="https://developers.google.com/community/gdsc" >• Website</a>
        </div>
    </div>        
    </div>


    </>

  )
}
