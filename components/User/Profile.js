import Usercontext from '@/context/Usercontext/Usercontext'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import styles from './Profile.module.css'
export default function Profile() {

  const usercontext = useContext(Usercontext);
  const {id} = usercontext;

  const [user, setUser] = useState({})
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('');
  const [rank, setRank] = useState('');



  useEffect(() => {
    
    const fetchUser = async () =>{

      try {
        const res = await axios.get('/api/user/getuserbyid',{
          params:{
            id
          }
        });
        setUser(res.data.user)
        setName(res.data.user.name);
        setRank(res.data.user.codeforce_rating);
      } catch (error) {
        console.log(error)
      }

    }

    fetchUser()

  }, [])

  const fetchUser = async () =>{

    try {
      const res = await axios.get('/api/user/getuserbyid',{
        params:{
          id
        }
      });
      setUser(res.data.user)
      setName(res.data.user.name);
      setRank(res.data.user.codeforce_rating);
    } catch (error) {
      console.log(error)
    }

  }

  const hanndleEditUser = async () =>{

    try {
      
      const res = await axios.put('/api/user/edituser',{
        id:user._id,
        name,
        codeforce_rating:rank
      })
      console.log(res)
      fetchUser()
      setEdit(false)

      
    } catch (error) {
      console.log(error)
    }
    

  }
  

  return (
    <div className={styles.mainCont} >
    <div className={styles.userProfile}>
        <div className={styles.userImage}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{margin:'30px auto 0px auto'}} xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="50%" viewBox="0 0 42.6 42.6">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Rectangle_1743" data-name="Rectangle 1743" width="42.6" height="42.6" rx="21.3" transform="translate(-9580 -8456)" fill="#263238"/>
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
            {
              edit ?
              <input value={name}  onChange={(e)=>{setName(e.target.value)}} placeholder='Name' className={styles.name} />
              :
              <div className={styles.name}>{user && user.name}</div>
            }

        </div>
        <div className={styles.userName}>
            <div className={styles.name}>{user.college}</div>
            {
              edit ?
              <div onClick={hanndleEditUser} style={{marginTop:40,width:'100%',textAlign:'center',cursor:'pointer'}}><u>Save Details</u></div>
              :
              <div onClick={()=>{setEdit(!edit)}} style={{marginTop:40,width:'100%',textAlign:'center',cursor:'poiinter'}}><u>Edit Details</u></div>

            }
        </div>
    </div>
    <div className={styles.aboutUser} >
        <div className={styles.smallHeading}>
            Skills
        </div>
        <div className={styles.infoCont}>
            <div className={styles.singleInfo}>C++</div>
            <div className={styles.singleInfo}>React.js</div>
            <div className={styles.singleInfo}>MongoDb</div>
            <div className={styles.singleInfo}>Nodejs</div>
            <div className={styles.singleInfo}>DSA</div>
        </div>
        <div className={styles.smallHeading}>
            Socials
        </div>
        <div className={styles.infoCont}>
            <div className={styles.singleInfo}>Instagran</div>
            <div className={styles.singleInfo}>Twitter</div>
            <div className={styles.singleInfo}>Linkedin</div>
            <div className={styles.singleInfo}>Github</div>
            <div className={styles.singleInfo}>Portfolio</div>
        </div>

        <div className={styles.ranking}>

        <div className={styles.singleRank}>
            <div>
                <div className={styles.rankText}>Codeforces Rating</div>
                {
                  edit ?
                  <input value={rank} onChange={(e)=>{setRank(e.target.value)}} placeholder='rank' className={styles.editInput} />
                  :
                  <div className={styles.rankRank}>{user.codeforce_rating}</div>

                }

            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="82" height="82" viewBox="0 0 82 82">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1.09" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fff"/>
      <stop offset="1" stopColor="#fff" stopOpacity="0"/>
    </linearGradient>
  </defs>
  <g id="Group_96" data-name="Group 96" transform="translate(1731 -12341)">
    <g id="Group_86" data-name="Group 86" transform="translate(-1731 12341)">
      <rect id="Rectangle_4362" data-name="Rectangle 4362" width="82" height="82" rx="41" fill="#f4e2d6"/>
      <rect id="Rectangle_4363" data-name="Rectangle 4363" width="82" height="82" rx="41" opacity="0.65" fill="url(#linear-gradient)"/>
    </g>
    <g id="noun-scoring-1655171" transform="translate(-1709.34 12364.981)">
      <path id="Path_8203" data-name="Path 8203" d="M116.64,178.98h9.784v25.492H116.64Z" transform="translate(-116.64 -169.945)" fill="#ae866e"/>
      <path id="Path_8204" data-name="Path 8204" d="M286.22,77.953H296V112.48H286.22Z" transform="translate(-272.141 -77.953)" fill="#ae866e"/>
      <path id="Path_8205" data-name="Path 8205" d="M455.8,265.57h9.784v17.747H455.8Z" transform="translate(-427.642 -248.791)" fill="#ae866e"/>
    </g>
  </g>
</svg>

            </div>

        </div>

        <div className={styles.singleRank}>
            <div>
                <div className={styles.rankText}>Codeforces Streak</div>
                <div className={styles.rankRank}>84 days</div>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="82" height="82" viewBox="0 0 82 82">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f3f6ff"/>
      <stop offset="1" stopColor="#e3e9f9"/>
    </linearGradient>
  </defs>
  <g id="Group_12723" data-name="Group 12723" transform="translate(1196 -12339)">
    <g id="Group_85" data-name="Group 85" transform="translate(-1196 12339)">
      <rect id="Rectangle_4364" data-name="Rectangle 4364" width="82" height="82" rx="41" fill="url(#linear-gradient)"/>
    </g>
    <g id="noun-complete-3549778" transform="translate(-1175.887 12359.113)">
      <path id="Path_8206" data-name="Path 8206" d="M210.587,116a5.358,5.358,0,0,1-3.664,1.695,16.784,16.784,0,1,1-5.592-5.586,5.357,5.357,0,0,1,1.688-3.677A21.1,21.1,0,1,0,210.575,116Z" transform="translate(-171.241 -105.531)" fill="#5e6d9e"/>
      <path id="Path_8207" data-name="Path 8207" d="M279.482,217.752l-5.2-4.689-2.679,2.988,6.7,6.028a2.009,2.009,0,0,0,1.339.529h.114a2.008,2.008,0,0,0,1.393-.67l10.717-12.057-3-2.679Z" transform="translate(-259.6 -195.041)" fill="#5e6d9e"/>
      <path id="Path_8208" data-name="Path 8208" d="M454.821,147.612a2.009,2.009,0,1,1-2.009-2.009,2.009,2.009,0,0,1,2.009,2.009" transform="translate(-417.363 -140.81)" fill="#5e6d9e"/>
    </g>
  </g>
</svg>


            </div>

        </div>

        </div>
        
    </div>



        
    </div>
  )
}
