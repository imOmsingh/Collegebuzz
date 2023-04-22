import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Hero.module.css'
import college from './college.webp'
import logo from './logo.jpeg'
import Hubs from '../CollegeHubs/Hubs'
import Annualfests from '../Annualfests/Annualfests'
import Students from '../Students/Students'

export default function Hero() {

    const [option, setOption] = useState('hubs')

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
        <div className={styles.singleOption} onClick={()=>{setOption('hubs')}} id={option === 'hubs' && styles.underline} >College Hubs</div>
        <div className={styles.singleOption} onClick={()=>{setOption('hubs')}}>Resources</div>
        <div className={styles.singleOption} onClick={()=>{setOption('students')}} id={option === 'students' && styles.underline}>Students</div>
        <div className={styles.singleOption} onClick={()=>{setOption('annualFests')}} id={option === 'annualFests' && styles.underline} >College Annual Fests</div>
    </div>

    {
        option === 'hubs'
        &&
        <Hubs/>

    }

    {
        option === 'students'
        &&
        <Students/>

    }

{
        option === 'annualFests'
        &&
        <Annualfests/>

    }


    </>

  )
}
