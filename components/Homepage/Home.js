import React from 'react'
import styles from './Home.module.css'
export default function Home() {
  return (
    <div className={styles.mainCont}>
    <div className={styles.navBar}>
        <div className={styles.logo}>CollegeBuzz</div>

<div className={styles.searchBar}>
<svg style={{position:'absolute',left:14,top:9}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>

<input placeholder='Search for colleges...' className={styles.searchBarInput}/>

</div>
       
        <div className={styles.optionsBar}>
            <div className={styles.singleBar}>Resources</div>
            <div className={styles.singleBar}>Events</div>
            <div className={styles.singleBar}>Clubs</div>


        </div>
    
    </div>

    <header className={styles.header}>
    
            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.main}>College buzz</span>
                    <span className={styles.sub}>is where life happpens</span>
                </h1>
                <div className={styles.buttonCont}>
                <div className={styles.button} href="#" id={styles.signin}>Sign in</div>
                <div className={styles.button} href="#">Log in</div>
                </div>
            </div>
        </header>

        </div>
  )
}