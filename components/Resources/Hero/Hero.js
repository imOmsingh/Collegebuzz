import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.css'
import collegeImage from './subject.jpeg'

export default function Hero({resource}) {
  return (
    <div className={styles.topCont}>
    <div className={styles.imageCont}>
        <div className={styles.mask}></div>
        <Image src={collegeImage} style={{objectFit:'cover'}} layout={'fill'} />
    </div>
    <div className={styles.detailsCont}>
        {/* <div className={styles.logoCont}>
            <Image src={logo} style={{objectFit:'contain'}} layout={'fill'} />
        </div> */}
        <h1 className={styles.mainHead}>{resource.name}</h1>
        <h1 className={styles.collegeName}>{resource.collegeName}</h1>

        <div className={styles.details}>
            <div className={styles.singleDetail}>• Notes</div>
            <div className={styles.singleDetail}>• Personal notes </div>
            <div className={styles.singleDetail}>• Year uploaded - {resource.yearUploaded}</div>
        </div>
    </div>        
    </div>
  )
}
