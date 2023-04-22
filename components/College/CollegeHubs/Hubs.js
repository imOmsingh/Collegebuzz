import React from 'react'
import styles from './Hubs.module.css'
import flutter from './flutter.webp'
import Image from 'next/image'
import Link from 'next/link'


export default function Hubs() {
  return (
    <div className={styles.mainCont}>
      <div className={styles.card}>
            <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
            <div className={styles.bottomCont}>
                <h2 className={styles.heading}>Introduction to Flutter</h2>
                <p>100% Online</p>
                <p>3 days event</p>
                <p>24 Apr - 26Apr</p>
                <div className={styles.readMore}>Read More</div>

            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
            <div className={styles.bottomCont}>
                <h2 className={styles.heading}>Introduction to Flutter</h2>
                <p>100% Online</p>
                <p>3 days event</p>
                <p>24 Apr - 26Apr</p>
                <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 

            </div>
        </div>


        <div className={styles.card}>
            <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
            <div className={styles.bottomCont}>
                <h2 className={styles.heading}>Introduction to Flutter</h2>
                <p>100% Online</p>
                <p>3 days event</p>
                <p>24 Apr - 26Apr</p>
                <div className={styles.readMore}>Read More</div>

            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
            <div className={styles.bottomCont}>
                <h2 className={styles.heading}>Introduction to Flutter</h2>
                <p>100% Online</p>
                <p>3 days event</p>
                <p>24 Apr - 26Apr</p>
                <div className={styles.readMore}>Read More</div>

            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
            <div className={styles.bottomCont}>
                <h2 className={styles.heading}>Introduction to Flutter</h2>
                <p>100% Online</p>
                <p>3 days event</p>
                <p>24 Apr - 26Apr</p>
                <div className={styles.readMore}>Read More</div>

            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
            <div className={styles.bottomCont}>
                <h2 className={styles.heading}>Introduction to Flutter</h2>
                <p>100% Online</p>
                <p>3 days event</p>
                <p>24 Apr - 26Apr</p>
                <div className={styles.readMore}>Read More</div>

            </div>
        </div>
        


    </div>
  )
}
