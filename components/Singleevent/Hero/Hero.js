import Script from 'next/script';
import React from 'react'
import styles from "./Hero.module.css";

export default function Hero({event}) {
    
  return (
    <div>
        <div className={styles.box1}>
        <h2>{event.name}</h2>
        {/* <span >{event.description}</span> */}
        <div className={styles.boxInside}>
            <p>{event.mode}</p>
        </div>
        <div className={styles.web}>
            <p>web</p>
        </div>
    </div>

    <div className={styles.box2}>
        <h2>About this event</h2>
      {/* <hr/>  */}
        <p>{event.description}</p>
        
    </div>
    <br/>
    <div className={styles.box3}>
        <div className={styles.time}>
            <div className={styles.icon}><ion-icon name="alarm"></ion-icon></div>
            <div className={styles.secondColumn}>
                <h1 className={styles.titleSpan}>When</h1>
                {event.startdate}
                <br/>
                3:00 PM - 4:00 PM (IST)
            </div>
        </div>

        <div className={styles.address}>
            <div className={styles.icon}><ion-icon name="location"></ion-icon></div>
            <div className={styles.secondColumn}>
                <h1 className={styles.titleSpan}>Where</h1>
                {event.collegeId}
                <br/>
                <span>Neemrana, Rajasthan</span>
            </div>
        </div>

        <div className={styles.Contactus}>
            <div className={styles.icon}><ion-icon name="call"></ion-icon><div>
            <div className={styles.contact}>
                <h1  className={styles.titleSpan}>Contact Us</h1>
                Om Singh : 9876543219
                <br/>
                <span>Archie:9876543219</span>
            </div>
        </div>

        <br/>
    </div>
    </div>

    </div>
    </div>
  )
}
