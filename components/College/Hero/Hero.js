import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Hero.module.css'
import collegeImage from './college.webp'
import logo from './logo.jpeg'
import Hubs from '../CollegeHubs/Hubs'
import Annualfests from '../Annualfests/Annualfests'
import Students from '../Students/Students'
import Resources from '../Resources/Resources'

export default function Hero({college}) {

    const [option, setOption] = useState('hubs')

  return (
    <>
    <div className={styles.topCont}>
    <div className={styles.imageCont}>
        <div className={styles.mask}></div>
        <Image src={collegeImage} style={{objectFit:'cover'}} layout={'fill'} />
    </div>
    <div className={styles.detailsCont}>
        <div className={styles.logoCont}>
            <Image src={logo} style={{objectFit:'contain'}} layout={'fill'} />
        </div>
        <h1 className={styles.mainHead}>{college && college.name}</h1>
        <div className={styles.details}>
            <div className={styles.singleDetail}>• {college.city}</div>
            <div className={styles.singleDetail}>• Estd {college.established} </div>
            <div className={styles.singleDetail}>• {college.status}</div>

        </div>
    </div>        
    </div>

    <div className={styles.optionBar}>
        <div className={styles.singleOption} onClick={()=>{setOption('hubs')}} id={option === 'hubs' ? styles.underline : null} >College Hubs</div>
        <div className={styles.singleOption} onClick={()=>{setOption('rosources')}} id={option === 'rosources' ? styles.underline : null}>Resources</div>
        <div className={styles.singleOption} onClick={()=>{setOption('students')}} id={option === 'students' ? styles.underline : null}>Students</div>
        <div className={styles.singleOption} onClick={()=>{setOption('annualFests')}} id={option === 'annualFests' ? styles.underline : null} >College Annual Fests</div>
    </div>


    {
        option === 'hubs'
        &&
        <Hubs id={college._id}/>
    }

    {
        option === 'students'
        &&
        <Students id={college._id}/>
    }

    {   
        option === 'annualFests'
        &&
        <Annualfests id={college._id}/>

    }

    {
        option === 'rosources'
        &&
        <Resources id={college._id}/>

    }

    </>

  )
}
