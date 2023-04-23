import Usercontext from '@/context/Usercontext/Usercontext'
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import styles from './Home.module.css'
export default function Home() {

    const usercontext = useContext(Usercontext);
    const {user,userName} = usercontext;

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
    <div className={styles.mainCont}>
    <div className={styles.navBar}>
        <div className={styles.logo}>{user ? <>YUOU</> : <>ONOONJL</>}</div>

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
            {user &&
                <Link href='/user'>
            <div className={styles.userIcon}><svg xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 42.6 42.6">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Rectangle_1743" data-name="Rectangle 1743" width="100%" height="100%" rx="21.3" transform="translate(-9580 -8456)" fill="#263238"/>
                    </clipPath>
                </defs>
                <g id="user_web" transform="translate(9580 8456)" clip-path="url(#clip-path)">
                    <rect id="Rectangle_1742" data-name="Rectangle 1742" width="42.6" height="42.6" rx="21.3" transform="translate(-9580 -8456)" fill="#263238"/>
                    <g id="Group_4321" data-name="Group 4321" transform="translate(-9571 -8441)">
                    <path id="Path_4356" data-name="Path 4356" d="M0,0H24V24H0Z" fill="none"/>
                    <circle id="Ellipse_142" data-name="Ellipse 142" cx="6" cy="6" r="6" transform="translate(6 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                    <path id="Path_4357" data-name="Path 4357" d="M6,24.579V21.386A6.386,6.386,0,0,1,12.386,15h6.386a6.386,6.386,0,0,1,6.386,6.386v3.193" transform="translate(-3.579 1.789)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                    </g>
                </g>
            </svg>
            </div>
            </Link>}


        </div>
    
    </div>



    <header className={styles.header}>
    
            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.main}>College buzz</span>
                    <span className={styles.sub}>is where life happpens</span>
                </h1>
                {user ?

                <div className={styles.userName} href="#" id={styles.signin}>Welcome! {userName}</div>
                :
                <div className={styles.buttonCont}>

                 <Link className={styles.button} href='/signin' id={styles.signin}>Sign in</Link>
                    <Link className={styles.button} href='/login'>Log in</Link>
                </div>

                }
            </div>
        </header>

        </div>
  )
}
