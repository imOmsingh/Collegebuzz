import React from 'react'
import styles from './Students.module.css'
export default function Students() {
  return (
    <div className={styles.mainCont}>
        {/* <main> */}
      <div id={styles.header}>
        <h1>Ranking</h1>
        
      </div>
      <div id={styles.leaderboard}>
        <div className={styles.ribbon}></div>
        <table>
          <tr>
            <td className={styles.number}>1</td>
            <td className={styles.name}>Arpit</td>
            <td className={styles.points}>
              900
            </td>
          </tr>
          <tr>
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
          </tr>
          
        </table>
       
      </div>
    {/* </main> */}
    </div>
  )
}
