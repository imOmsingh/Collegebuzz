import Eventhero from '@/components/Event/Eventhero/Eventhero';
import Events from '@/components/Hubs/Events/Events';
import Hero from '@/components/Hubs/HubsHero/Hero';
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';


export async function getServerSideProps(context) {

    const res = await axios.get('/api/event/getevent',{
      params:{
        collegeId:context.params.collegeId,
        hubId:context.params.hubid
      }
    });
    return{
        props:{
          events:res.data.event
        }
    }
    

  }


export default function index({events,context}) {

    const router = useRouter();

  return (
    <>
    <Navbar/>
        <Hero hubId={router.query.hubid} />
        <Events events={events} />
    </>
  )
}
