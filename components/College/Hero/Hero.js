import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.css'
import college from './college.webp'
import logo from './logo.jpeg'
import Hubs from '../CollegeHubs/Hubs'

export default function Hero() {
  return (
    <>
    <div className={styles.topCont}>
    <div className={styles.imageCont}>
        <div className={styles.mask}></div>
        <Image src={college} style={{objectFit:'cover'}} layout={'fill'} />
    </div>
    <div className={styles.detailsCont}>
        <div className={styles.logoCont}>
            <Image src={logo} style={{objectFit:'contain'}} layout={'fill'} />
        </div>
        <h1 className={styles.mainHead}>Jaypee Institute of Information Technology</h1>
        <div className={styles.details}>
            <div className={styles.singleDetail}>• New Delhi, Delhi NCR</div>
            <div className={styles.singleDetail}>• Estd 1961 </div>
            <div className={styles.singleDetail}>• Autonomous University</div>

        </div>
    </div>        
    </div>

    <div className={styles.optionBar}>
        <div className={styles.singleOption} style={{borderBottom: "3px solid #0056d2"}}>College Hubs</div>
        <div className={styles.singleOption}>Resources</div>
        <div className={styles.singleOption}>Students</div>
        <div className={styles.singleOption}>College Annual Fests</div>


        
    </div>

    <Hubs/>

    </>

  )
}
