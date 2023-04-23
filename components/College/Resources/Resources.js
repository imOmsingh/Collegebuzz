import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import flutter from './flutter.webp'

import styles from './Resources.module.css'
export default function Resources() {
  return (
    <>
    {/* <div className={styles.selectYear}>
        
    </div> */}

    <div className={styles.container}>
        <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>Computer Science and Engeneering  (Sem - 2)</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>Computer Science and Engeneering  (Sem - 2)</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>Computer Science and Engeneering  (Sem - 2)</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>Computer Science and Engeneering  (Sem - 2)</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>Computer Science and Engeneering  (Sem - 2)</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div> <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>Computer Science and Engeneering  (Sem - 2)</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
    </div>
    </>
  )
}
