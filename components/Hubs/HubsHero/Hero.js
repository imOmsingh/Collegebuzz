import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import college from './gdsc.webp'
import logo from './gdsc.png'
import axios from 'axios'

export default function Hero({hubId}) {

  const [fetchHubs, setFetchHubs] = useState({})

  useEffect(() => {

      const handleFetchHubs = async () =>{
          
          try {

              const res = await axios.get('/api/hubs/gethub',{
                  params:{
                      id:hubId
                  }
              })

              if(res.status){
                  setFetchHubs(res.data.hub)
              }
          
          } catch (error) {
              console.log(error)
          }

      }
    
      handleFetchHubs();

  }, [])
  

  return (
    <>
    <div className={styles.topCont}>
    <div className={styles.imageCont}>
        <div className={styles.mask}></div>
        <Image src={college} style={{objectFit:'cover'}} layout={'fill'} />
    </div>
    <div className={styles.detailsCont}>
        {/* <div className={styles.logoCont}>
            <Image src={logo} style={{objectFit:'contain'}} layout={'fill'} />
        </div> */}
        <h1 className={styles.mainHead}>{fetchHubs.name}</h1>
        <h4 className={styles.details}>
                {fetchHubs.description}
        </h4>
        <div className={styles.details}>
        Organisers - &nbsp;
        {fetchHubs.organisers &&
          fetchHubs.organisers.map((item,index)=>{
            return(
              <div> {item}</div>
            )
          })
        }
          </div>

        <div className={styles.details}>
            <a className={styles.singleDetail} href="https://developers.google.com/community/gdsc" >• Website</a>
        </div>
    </div>        
    </div>


    </>

  )
}
