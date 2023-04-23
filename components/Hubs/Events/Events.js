import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Events.module.css'
import flutter from './flutter.webp'

export default function Events({events}) {
  return (
    <>
    <h1 className={styles.bigHeading}>Upcoming Events</h1>
    <section className={styles.eventsMain}>

                    <div className={styles.card}>
                        <div className={styles.topCont}><img style={{height:'100%',width:'100%'}} src={events[0].logo} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>{events[0].name}</h2>
                            <p> 100% {events[0].mode}</p>
                            <p>{events[0].noofdays} days event</p>
                            <p>{events[0].startdate} - 26Apr</p>
                            <Link href={`/singleevent/${events[0]._id}`}><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
            
            
        

    </section>
    

    <h1 className={styles.bigHeading}>All Events</h1>
    <div className={styles.eventsMain}>
    {
            events &&
            events.map((item,index)=>{
                return(
                    <div className={styles.card}>
                        <div className={styles.topCont}><img style={{height:'100%',width:'100%'}} src={item.logo} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>{item.name}</h2>
                            <p> 100% {item.mode}</p>
                            <p>{item.noofdays} days event</p>
                            <p>{item.startdate} - 26Apr</p>
                            <Link href={`/singleevent/${item._id}`}><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
                )
            })
        }
        
    </div>

    </>
  )
}
