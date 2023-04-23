import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Singleevent/Hero/Hero';
import axios from 'axios';
import React from 'react'


export async function getServerSideProps(context) {
    
  
    const colleges = await axios.get('/api/event/geteventbyid',{
      params:{
        id:context.params.id
      }
    });
  
    return{
        props:{
          event:colleges.data.event
        }
    }
  }

export default function index({event}) {

    console.log(event)
    
  return (
    <div>
        <Navbar/>
        <Hero event={event}/>
    </div>
  )
}
