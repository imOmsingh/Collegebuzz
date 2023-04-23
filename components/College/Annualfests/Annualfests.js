import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Annualfests.module.css'
import gdsc from './gdsc.png'

export default function Annualfests({id}) {

  const [event, setEvent] = useState([])

  useEffect(() => {


    const FetchEvent = async () =>{

      try {

        const res = await axios.get('/api/event/getcollegeevent',{
          params:{
            collegeId:id
          }
        })
        setEvent(res.data.event)
        
      } catch (error) {
        console.log(error)
      }

    }
    
    
    

    FetchEvent();


  }, [])
  

  return (
    <div className={styles.mainCont}>

      {
        event &&
        event.map((item,index)=>{
          return(
            <div className={styles.card}>
            <div className={styles.imageCont}>
              <Image src={gdsc} layout="fill" />
            </div>
            <div className={styles.bottomCont}>
              <div className={styles.mainHead}>{item.name}</div>
              <div className={styles.descCont}>{item.description}</div>
              <Link href={`/singleevent/${item._id}`}><div className={styles.register}>Register</div></Link>
            </div>
    
              
            </div>
          )
        })
      }
        
    </div>
  )
}
