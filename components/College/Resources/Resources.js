import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import flutter from './flutter.webp'

import styles from './Resources.module.css'
export default function Resources({id}) {

    const [resource, setResource] = useState([])

    useEffect(() => {

        const fetchResource = async () =>{

            try {
                const res = await axios.get('/api/resource/getresourcebycollege',{
                    params:{
                        id
                    }
                })
                console.log(res)
                setResource(res.data.resource);
                
            } catch (error) {
                console.log(error)
            }

        }
      
        fetchResource()

    }, [])
    
    
  return (
    <>

    <div className={styles.container}>

        {
            resource &&
            resource.map((item,index)=>{
                return(
                    <div key={index} className={styles.card}>
                        <div className={styles.topCont}><Image layout='fill' src={flutter} /></div>
                        <div className={styles.bottomCont}>
                            <h2 className={styles.heading}>{item.name}  (Sem - {item.collegeSem})</h2>
                            <p>• Peronal Notes</p>
                            <p>• Lecture Notes</p>
                            <p>• Year - {item.yearUploaded}</p>
                            <Link href={`/resources/${item._id}`}><div className={styles.readMore}>Read More</div></Link> 
                        </div>
                    </div>
                )
            })
        }
        

                    {/* <div className={styles.card}>
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
                    </div> */}
    </div>
    </>
  )
}
