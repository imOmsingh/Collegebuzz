import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Events.module.css'
import flutter from './flutter.webp'

export default function Events({events}) {
  return (
    <>
    <h1 className={styles.bigHeading}>Upcoming Events</h1>
    <section className={styles.container}>

        {
            events &&
            events.map((item,index)=>{
                return(
                    <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>{item.name}</h2>
                            <p> 100% {item.mode}</p>
                            <p>{item.noofdays} days event</p>
                            <p>{item.startdate} - 26Apr</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
                )
            })
        }
            
            
        

    </section>
    

    <h1 className={styles.bigHeading}>All Events</h1>
    <div className={styles.eventsMain}>
    {
            events &&
            events.map((item,index)=>{
                return(
                    <div className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>{item.name}</h2>
                            <p> 100% {item.mode}</p>
                            <p>{item.noofdays} days event</p>
                            <p>{item.startdate} - 26Apr</p>
                            <Link href='/hubs'><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
                )
            })
        }
        
    </div>

    </>
  )
}
