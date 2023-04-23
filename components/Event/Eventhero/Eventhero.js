import React from 'react'
import styles from './Eventhero.module.css'
export default function Eventhero() {
  return (
    <div className={styles.mainCont}>
        <div className={styles.singleView} >
            <h2 className={styles.heading}>Need a new team member ( Ferocious team )</h2>
            <div className={styles.heading2}>Roles and Duties</div>
            <h2 className={styles.desc}>Google Developer Student Club is a university-based community group for students who are interested in technology, especially technology from Google. Google Developer Student is a place to grow as a developer, starting from a beginner developer to an advanced developer. Google Developer Student Club is not always about “programming” but also about connecting, learning together and growing together.</h2>
            <div className={styles.heading2}>Contact Details</div>
            <h2 className={styles.desc2}>Email : omsingh200310@gmail.com</h2>
            <h2 className={styles.desc2}>Whatsapp : 9205322720</h2>
        </div>
    </div>
  )
}
