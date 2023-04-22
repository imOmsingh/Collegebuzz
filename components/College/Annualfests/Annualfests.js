import Image from 'next/image'
import React from 'react'
import styles from './Annualfests.module.css'
import gdsc from './gdsc.png'

export default function Annualfests() {
  return (
    <div className={styles.mainCont}>
        <div className={styles.card}>
        <div className={styles.imageCont}>
          <Image src={gdsc} layout="fill" />
        </div>
        <div className={styles.bottomCont}>
          <div className={styles.mainHead}>JHANKAR FEST</div>
          <div className={styles.descCont}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias iure sed magni saepe consequatur ea voluptatibus veniam explicabo exercitationem autem alias, ex tempora omnis et veritatis. Sint, quibusdam culpa!</div>
          <div className={styles.register}>Register</div>
        </div>

          
        </div>
        <div className={styles.card}>BLA BLA</div>
    </div>
  )
}
