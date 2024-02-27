import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App(){
  return(
    <section className='App'>
      <TwitterFollowCard initialIsFollowing={true} userName= "Vizard16">
        Arturo Torres


      </TwitterFollowCard>

      <TwitterFollowCard  isFollowing userName= "presno2112" >
        Sebastian Presno
      </TwitterFollowCard>
    </section>
    

    
  )


}