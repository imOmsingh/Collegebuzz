import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Team.module.css'
export default function Team({id}) {

    const [teamer, setTeamer] = useState([])

    useEffect(() => {

        const fetchTeams = async () =>{
            try {
                const res = await axios.get('/api/teams/getTeamByEvent',{
                    params:{
                        eventId:id
                    }
                })
                setTeamer(res.data.team)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTeams()

    }, [])
    
  return (
    <div className={styles.mainCont}>
    
    {
        teamer.length > 0 &&
        teamer.map((item,idx)=>{
            return(
                <div className={styles.singleView} >
                    <h2 className={styles.heading}>{item.projectTitle}</h2>
                    <div className={styles.heading2}>Roles and Duties</div>
                    <h2 className={styles.desc}>{item.description}</h2>
                    <div className={styles.heading2}>Contact Details</div>
                    <h2 className={styles.desc2}>{item.contact}</h2>
                </div>
            )
        })
    }
        
       
    </div>
  )
}
