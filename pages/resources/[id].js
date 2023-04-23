import Hero from '@/components/Resources/Hero/Hero';
import axios from 'axios';
import React from 'react'


export async function getServerSideProps(context) {
    
  
    const resource = await axios.get('/api/resource/getresourcebyid',{
      params:{
        id:context.params.id
      }
    });
  
    return{
        props:{
            resource:resource.data.resource
        }
    }
}


export default function index({resource}) {
  return (
    <div>
        <Hero resource={resource}/>
    </div>
  )
}
