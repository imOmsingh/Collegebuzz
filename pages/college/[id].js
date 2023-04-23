import Hero from '@/components/College/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';
import React from 'react'
import styles from '../../components/Homepage/Home.module.css'

export async function getServerSideProps(context) {
    
    const colleges = await axios.get('/api/college/getcollege',{
      params:{
        id:context.params.id
      }
    });
  
    return{
        props:{
          college:colleges.data.college
        }
    }
  }


export default function index({college}) {
  return (
    <>
      <Navbar/>
      <Hero college={college}/>

    </>
  )
}
