import React, { useEffect, useState } from 'react'
import styles from './Hubs.module.css'
import flutter from './flutter.webp'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'


export default function Hubs({id}) {

    const [fetchHubs, setFetchHubs] = useState([])

    useEffect(() => {

        const handleFetchHubs = async () =>{
            
            try {

                const res = await axios.get('/api/hubs/getbycollegeid',{
                    params:{
                        id
                    }
                })

                if(res.status){
                    console.log(res)
                    setFetchHubs(res.data.hub)
                }
            
            } catch (error) {
                console.log(error)
            }

        }
      
        handleFetchHubs();

    }, [])
    

  return (
    <div className={styles.mainCont}>

        {
            fetchHubs &&
            fetchHubs.map((item,index)=>{
                return(
                    
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.textCont}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                            <hr/>
                        <Link href={`/event/${id}/${item._id}`}>
                            <div className={styles.readMore} >Read more</div>
                        </Link>
                        </div>      
                    </div>
                )
            })
        }
        


    </div>
  )
}
