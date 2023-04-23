import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Students.module.css'
export default function Students({id}) {

  const [studentList, setStudentList] = useState([])

  useEffect(() => {

    const fetchStudents = async () =>{

      try {

        const res = await axios.get('/api/user/rankingbycodeforces',{
          params:{
            id
          }
        })
        setStudentList(res.data.student)
        
      } catch (error) {
        console.log(error)
      }

        
    } 

    fetchStudents();
    
  }, [])


  

  return (
    <div className={styles.mainCont}>
        {/* <main> */}
      <div id={styles.header}>
        <h1>Ranking</h1>
        
      </div>
      <div id={styles.leaderboard}>
        <div className={styles.ribbon}></div>
        <table>
          {
            studentList &&
            studentList.map((item,index)=>{
              return(
                <tr key={index}>
                  <td className={styles.number}>{index+1}</td>
                  <td className={styles.name}>{item.name}</td>
                  <td style={{color:'black'}} className={styles.points}>
                    {item.codeforce_rating? <>{item.codeforce_rating}</> : <>-</>}
                  </td>
                </tr>
              )
            })
          }
          
          {/* <tr>
            <td className={styles.number}>2</td>
            <td className={styles.name}>Archie</td>
            <td className={styles.points}>
              900
            </td>
          </tr>
          <tr>
            <td className={styles.number}>3</td>
            <td className={styles.name}>Manpreet</td>
            <td className={styles.points}>
              900
            </td>
          </tr>
          <tr>
            <td className={styles.number}>4</td>
            <td className={styles.name}>Sahil</td>
            <td className={styles.points}>
              900
            </td>
          </tr>
          <tr>
            <td className={styles.number}>5</td>
            <td className={styles.name}>Sanchit</td>
            <td className={styles.points}>
              900
            </td>
          </tr>
          <tr>
            <td className={styles.number}>6</td>
            <td className={styles.name}>Om singh</td>
            <td className={styles.points}>
              900
            </td>
          </tr> */}
          
        </table>
       
      </div>
    {/* </main> */}
    </div>
  )
}
