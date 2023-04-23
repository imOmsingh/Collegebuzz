import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {
  const [collegeList, setCollegeList] = useState([])
    
    const searchCollege  = async (search) =>{

        try {
            if(search === ''){
                setCollegeList([])
                return
            }
            console.log(search)
            const res = await axios.get('/api/college/searchcollege',{
                params:{
                    search
                }
            })
            setCollegeList(res.data)
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }

        
    }
  return (
        <div className={styles.navBar}>
            <Link href='/'>
            <div className={styles.logo}>CollegeBuzz</div>
            </Link>

            <div className={styles.searchBar}>
              <svg style={{position:'absolute',left:14,top:9}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>

              <input onChange={(e)=>{searchCollege(e.target.value)}} placeholder='Search for colleges...' className={styles.searchBarInput}/>
              {
                    collegeList &&
                    <div className={styles.suggestCont}>
                        {
                            collegeList.map((item,index)=>{
                                return(
                                    <Link href={`/college/${item._id}`}>
                                        <div className={styles.singleSuggestCont}>{item.name}</div>
                                    </Link>
                                )
                            })
                        }
                    
                    </div>  

                }
            </div>
        
            <div className={styles.optionsBar}>
                <div className={styles.singleBar}>Resources</div>
                <div className={styles.singleBar}>Events</div>
                <div className={styles.singleBar}>Clubs</div>
            </div>
        </div>
  )
}
